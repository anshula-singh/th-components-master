import * as lwc from "@lwc/compiler";
import del from "del";
import fs from "fs-extra";
import glob from "glob";
import path from "path";
import prettier from "prettier";

import { rollup, Plugin } from "rollup";
// @ts-ignore
import rollupBabel from "rollup-plugin-babel";
import rollupReplace from "@rollup/plugin-replace";
import rollupResolve from "@rollup/plugin-node-resolve";

const packageJSON = {
  name: "trailheadui",
  version: "0.0.9",
  description: "",
  publishConfig: {
    registry:
      "https://nexus.soma.salesforce.com/nexus/content/repositories/npmjs-internal/"
  }
};

const src = path.resolve.bind(__dirname, "src");
const dist = path.resolve.bind(__dirname, ".trailheadui");

export async function build() {
  await prepare();
  await bundle();
  await generateMeta();
  await namespaces();
  await verify();
  await cleanup();
}

async function prepare() {
  await del(dist());
  // We're only publishing the "tds" namespace for now
  await fs.copy(src("elements/tds"), dist("src"));
  // Remove stories
  await del(dist("**/*.stories.js"));
  // Tests can't be run on platform for now because of TypeScript, dependencies, etc
  await del(dist("**/__tests__/**"));
  await fs.writeFile(
    dist("package.json"),
    JSON.stringify(packageJSON, null, 2)
  );
}

async function bundle() {
  let input = glob.sync(src("elements/tds/*/*.ts")).filter(f => {
    // Only use "{component}/{component}.ts" files as entries
    let dirName = path.basename(path.dirname(f));
    let fileName = path.basename(f, ".ts");
    return dirName === fileName;
  });
  let bundle = await createBundle(input);
  await bundle.write({
    dir: dist("rollup"),
    // Chunked imports will be remapped with rollupRelativeImports()
    // and then moved into the appropriate directory with the code below
    chunkFileNames: "shared_[name].js",
    format: "esm"
  });
  // Move all the top-level outputs to their corresponding comoponent directory
  for (let f of glob.sync(dist("rollup/shared_*.js"))) {
    fs.moveSync(f, dist("src", path.basename(f, ".js"), path.basename(f)));
  }
  for (let f of glob.sync(dist("rollup/*.js"))) {
    let name = path.basename(f, ".js");
    fs.moveSync(f, dist(`src/${name}/${name}.js`));
    fs.unlinkSync(dist(`src/${name}/${name}.ts`));
  }
}

export function createBundle(input: string | string[], plugins: Plugin[] = []) {
  return rollup({
    input,
    external: id => /^(lightning|lwc|tds)/.test(id),
    plugins: [
      ...plugins,
      rollupBabel({
        babelrc: false,
        plugins: [
          ["@babel/plugin-syntax-decorators", { decoratorsBeforeExport: true }],
          ["@babel/plugin-transform-typescript"]
        ],
        extensions: [".ts"]
      }),
      rollupLWCDecorators(),
      rollupRelativeImports(),
      rollupPlatform(),
      rollupResolve({ extensions: [".ts", ".js"] }),
      rollupReplace({
        values: {
          "process.env.CROSS_ORIGIN_ASSETS": JSON.stringify("false"),
          "process.env.IMPORT_META_URL": JSON.stringify(""),
          "process.env.NODE_ENV": JSON.stringify("production")
        }
      }),
      rollupPrettier()
    ]
  });
}

async function generateMeta() {
  for (let f of glob.sync(dist("src/*"))) {
    let name = path.basename(f);
    await fs.writeFile(
      path.join(f, `${name}.js-meta.xml`),
      `
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
  <isExposed>true</isExposed>
</LightningComponentBundle>
      `.trim()
    );
  }
}

async function namespaces() {
  for (let f of glob.sync(dist("src/**/*.{js,html,css}"))) {
    let prevContent = await fs.readFile(f);
    let nextContent = mapNamepace(prevContent.toString(), "tds", "trailheadui");
    await fs.writeFile(f, nextContent);
  }
}

async function verify() {
  for (let component of glob.sync(dist("src/*"))) {
    let [name, namespace] = component.split("/").reverse();
    let files = glob
      .sync(`${name}.{js,css,html}`, { cwd: component })
      .reduce((files, file) => {
        let content = fs.readFileSync(`${component}/${file}`).toString();
        Object.assign(files, { [file]: content });
        return files;
      }, {});
    if (!Object.keys(files).length) continue;
    let result = await lwc.compile({
      name,
      namespace,
      files: { ...files },
      stylesheetConfig: {
        customProperties: {
          allowDefinition: true
        }
      }
    });
    if (!result.success) {
      console.log(component);
      console.log(result.diagnostics);
    }
  }
}

async function cleanup() {
  await del(dist("src/**/*.ts"));
  for (let f of glob.sync(dist("src/*"))) {
    await fs.move(f, dist(path.basename(f)));
  }
  await del([dist("rollup"), dist("src")]);
}

export function mapNamepace(value: string, from: string, to: string) {
  return value
    .replace(new RegExp(`${from}\\/`, "g"), `${to}/`)
    .replace(new RegExp(`<${from}-`, "g"), `<${to}-`)
    .replace(new RegExp(`</${from}`, "g"), `</${to}`);
}

// Rollup uses Accorn which doesn't understand decorators
// Comment them out during bundling and then uncomment them during render
function rollupLWCDecorators(): Plugin {
  return {
    name: "LWC Decorators",
    transform: (code, id) => {
      return (
        [code]
          // Comment out decorators
          .map(code =>
            code.replace(/(?:(@(?:api|track))\s+)(?!\s*get)/g, "// $1 ")
          )
          // Comment out decorators (getters)
          .map(code => code.replace(/(@api)(\s+get)/g, "// $1\n$2"))
          // Add a side effet so rollup doesn't prune decorator imports
          .map(code => {
            if (/@(api|track)/m.test(code))
              return `${code}\n\nconsole.log(api, track);`;
            return code;
          })[0]
      );
    },
    renderChunk: code => {
      return {
        code: [code]
          // Uncomment decorators
          .map(code => code.replace(/\/\/\s(@(?:api|track))/g, "$1"))
          // Remove decorators side effect
          .map(code => code.replace(/console\.log\(api, track\)/g, ""))[0],
        map: null
      };
    }
  };
}

function rollupRelativeImports(): Plugin {
  return {
    name: "Relative Imports",
    resolveId: (source, importer) => {
      if (importer) {
        // Rewrite "../{component}/{componentFile}" as "trailheadui/{component}/{componentFile}"
        // and mark it as an external import
        let match = source.match(/\.\.\/(?<dir>.*?)\/(?<file>.*?)$/);
        if (match && match.groups) {
          if (match.groups.dir === match.groups.file) {
            return { id: `trailheadui/${match.groups.dir}`, external: true };
          }
        }
      }
      return null;
    },
    renderChunk: (code, chunk) => {
      // Rollup outputs chunks to "./shared_*.js", so we need to convert imports
      // to use the LWC namespace/component import
      return code.replace(/\.\/(shared_.*?)\.js/g, "trailheadui/$1");
    }
  };
}

// Some platform specific code only needs to be present in this build
// so we uncomment anything with a ROLLUP_PLATFORM block comment
function rollupPlatform(): Plugin {
  return {
    name: "Salesforce Platform",
    transform: (code, id) => {
      return [code].map(code =>
        code.replace(/\/\*\sROLLUP_PLATFORM\n([\s\S]*?)\*\//g, "$1")
      )[0];
    }
  };
}

function rollupPrettier(): Plugin {
  return {
    name: "Prettier",
    renderChunk: code => {
      return prettier.format(code, { parser: "babel" });
    }
  };
}
