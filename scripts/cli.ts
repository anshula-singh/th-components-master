import program from "commander";
import del from "del";
import fs from "fs-extra";
import glob from "glob";
// @ts-ignore
import stringify from "json-stable-stringify";
import _ from "lodash";
import prettier from "prettier";

import theme from "../theme";

import { build as trailheadui } from "./trailheadui";

const parseComponent = (arg: string) => {
  let [namespace, name] = arg.split("/");
  if (/-/.test(name)) name = _.camelCase(name);
  let basePath = `./src/elements/${namespace}/${name}`;
  let modulePath = `${namespace}/${name}`;
  let tagName = `${namespace}-${_.kebabCase(name)}`;
  let identifier = _.upperFirst(_.camelCase(name));
  return {
    basePath,
    identifier,
    modulePath,
    namespace,
    name,
    tagName
  };
};

program
  .command("component:create")
  .arguments("<namespace/name>")
  .option("-m, --module", "module")
  .option("-s, --story", "story")
  .option("-t, --test", "test")
  .action(async (param, command) => {
    let {
      basePath,
      identifier,
      modulePath,
      namespace,
      name,
      tagName
    } = parseComponent(param);
    fs.outputFileSync(
      `${basePath}/${name}.css`,
      prettier.format(`:host { display: block; }`, { parser: "css" })
    );
    fs.outputFileSync(`${basePath}/${name}.html`, `<template></template>`);
    fs.outputFileSync(
      `${basePath}/${name}.ts`,
      prettier.format(
        `
      import { LightningElement } from "lwc";

      export default class extends LightningElement {}
      `,
        { parser: "typescript" }
      )
    );
    let tsConfig = JSON.parse(fs.readFileSync("./tsconfig.json").toString());
    tsConfig.compilerOptions.paths[`${namespace}/${name}`] = [
      `./elements/${namespace}/${name}/${name}.ts`
    ];
    fs.outputFileSync(
      `./tsconfig.json`,
      prettier.format(stringify(tsConfig, { space: 2 }), { parser: "json" })
    );
    if (command.test) {
      fs.outputFileSync(
        `${basePath}/__tests__/${name}.test.ts`,
        prettier.format(
          `
          import { buildCustomElementConstructor } from "lwc";

          import { html, renderIntoBody } from "../../../../shared/testutils";

          import ${identifier} from "${modulePath}";

          customElements.define("${tagName}", buildCustomElementConstructor(${identifier}));
          
          describe("${tagName}", () => {
            it("works", () => {
              let element = renderIntoBody(html\`<${tagName}></${tagName}>\`);
            });
          });
          
        `,
          { parser: "typescript" }
        )
      );
    }
    if (command.story) {
      fs.outputFileSync(
        `${basePath}/${name}.stories.ts`,
        prettier.format(
          `
          import { html } from "lit-html";
  
          export default {
            title: "${namespace}/${tagName}",
            parameters: {
              modules: ["/modules/${tagName}.js"]
            }
          };
          
          export const Base = () => html\`
            <${tagName}></${tagName}>
          \`;
        `,
          { parser: "typescript" }
        )
      );
    }
    if (command.module) {
      fs.outputFileSync(
        `./src/modules/${tagName}.ts`,
        prettier.format(
          `
          import { buildCustomElementConstructor } from "lwc";

          import ${identifier} from "${namespace}/${name}";
          
          export { ${identifier} };
          
          customElements.define("${tagName}", buildCustomElementConstructor(${identifier}));
        `,
          { parser: "typescript" }
        )
      );
    }
  });

program
  .command("component:delete")
  .arguments("<namespace/name>")
  .action(async (param, command) => {
    let { namespace, name, tagName } = parseComponent(param);
    let tsConfig = JSON.parse(fs.readFileSync("./tsconfig.json").toString());
    delete tsConfig.compilerOptions.paths[`${namespace}/${name}`];
    fs.outputFileSync(
      `./tsconfig.json`,
      prettier.format(stringify(tsConfig, { space: 2 }), { parser: "json" })
    );
    await del([
      `./src/elements/${namespace}/${name}`,
      `./src/modules/${tagName}.ts`
    ]);
  });

program
  .command("component:rename")
  .arguments("<namespace/name> <namespace/name>")
  .action(async (p, n, command) => {
    let prev = parseComponent(p);
    let next = parseComponent(n);
    if (next.name !== prev.name) {
      for (let p of glob.sync(`${prev.basePath}/**/*.*`)) {
        fs.renameSync(
          p,
          p.replace(new RegExp(`${prev.name}\\.`), `${next.name}.`)
        );
      }
    }
    fs.moveSync(prev.basePath, next.basePath);
    if (fs.existsSync(`./src/modules/${prev.tagName}.ts`)) {
      fs.moveSync(
        `./src/modules/${prev.tagName}.ts`,
        `./src/modules/${next.tagName}.ts`
      );
    }
    for (let p of glob.sync("./{src,stories}/**/*.*")) {
      let prevContent = fs.readFileSync(p, "utf8");
      let nextContent = prevContent
        .replace(new RegExp(prev.tagName, "g"), next.tagName)
        .replace(new RegExp(prev.modulePath, "g"), next.modulePath)
        .replace(new RegExp(prev.identifier, "g"), next.identifier);
      if (nextContent !== prevContent) {
        fs.writeFileSync(p, nextContent);
      }
    }
    let tsConfig = JSON.parse(fs.readFileSync("./tsconfig.json").toString());
    delete tsConfig.compilerOptions.paths[`${prev.namespace}/${prev.name}`];
    tsConfig.compilerOptions.paths[`${next.namespace}/${next.name}`] = [
      `./elements/${next.namespace}/${next.name}/${next.name}.ts`
    ];
    fs.outputFileSync(
      `./tsconfig.json`,
      prettier.format(stringify(tsConfig, { space: 2 }), { parser: "json" })
    );
  });

program.command("theme").action(async () => {
  theme.generate();
});

program.command("trailheadui").action(async () => {
  await trailheadui();
});

program.parse(process.argv);
