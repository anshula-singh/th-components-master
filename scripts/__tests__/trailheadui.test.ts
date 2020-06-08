import path from "path";
import { Plugin } from "rollup";

import { createBundle, mapNamepace } from "../trailheadui";

describe("createBundle", () => {
  it("transforms TypeScript", async () => {
    let output = await getOutput(
      `
      import { api, LightningElement } from "lwc";
      export default class extends LightningElement {
        @api disabled: boolean | null = null;
        @api
        get firstName(): string {
          return "";
        }
        @api get lastName(): string {
          return "";
        }
      }
    `
    );
    expect(output).toMatchSnapshot();
  });
  it("injects Platform specific code", async () => {
    let output = await getOutput(
      `
      import { api, LightningElement } from "lwc";
      /* ROLLUP_PLATFORM
      import { getIconPath } from "lightning/iconUtils";
      */
      export default class extends LightningElement {
        @api disabled: boolean | null = null;
        private get href() {
          /* ROLLUP_PLATFORM
          return getIconPath();
          */
          return "";
        }
      }
    `
    );
    expect(output).toMatchSnapshot();
  });
  it("inlines helpers", async () => {
    let output = await getOutput(
      `
      import { api, LightningElement } from "lwc";
      import { myHelper } from "my/helper";
      export default class extends LightningElement {
        @api disabled: boolean | null = null;
        connectedCallback() {
          myHelper()
        }
      }
    `,
      {
        "my/helper": `export function myHelper() { alert("Hello"); }`
      }
    );
    expect(output).toMatchSnapshot();
  });
  it("chunks shared helpers", async () => {
    let modules = {
      "entry-1.ts": `
        import { myHelper } from "my/helper";
        myHelper();
      `,
      "entry-2.ts": `
        import { myHelper } from "my/helper";
        myHelper();
      `,
      "my/helper": `
        export function myHelper() {
          alert("Hello");
        }
      `
    };
    let { generate } = await createBundle(
      ["entry-1.ts", "entry-2.ts"],
      [virtual(modules)]
    );
    let { output } = await generate({
      dir: "./output",
      format: "esm",
      chunkFileNames: "shared_[name].js"
    });
    expect(output[0].code).toMatchSnapshot();
  });
});

describe("mapNamespace", () => {
  it("works", () => {
    expect(mapNamepace(`import "tds/button";`, "tds", "test")).toEqual(
      `import "test/button";`
    );
    expect(mapNamepace("<tds-button></tds-button>", "tds", "test")).toEqual(
      "<test-button></test-button>"
    );
  });
});

async function getOutput(
  input: string,
  modules: { [key: string]: string } = {}
) {
  let { generate } = await createBundle("entry.ts", [
    virtual({ ...modules, "entry.ts": input })
  ]);
  let { output } = await generate({
    dir: "./output",
    format: "esm",
    chunkFileNames: "shared_[name].js"
  });
  return output[0].code;
}

function virtual(modules: { [key: string]: string }): Plugin {
  // For some reason @rollup/plugin-virtual doesn't work
  // because PREFIX contains a ":"
  const PREFIX = `virtual__`;
  const resolvedIds = new Map();
  Object.keys(modules).forEach(id => {
    resolvedIds.set(path.resolve(id), modules[id]);
  });
  return {
    name: "virtual",
    resolveId(id, importer) {
      if (id in modules) return PREFIX + id;
      if (importer) {
        if (importer.startsWith(PREFIX))
          importer = importer.slice(PREFIX.length);
        const resolved = path.resolve(path.dirname(importer), id);
        if (resolvedIds.has(resolved)) return PREFIX + resolved;
      }
    },
    load(id) {
      if (id.startsWith(PREFIX)) {
        id = id.slice(PREFIX.length);
        return id in modules ? modules[id] : resolvedIds.get(id);
      }
    }
  };
}
