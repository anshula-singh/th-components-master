import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import ProgressBar from "tds/progressBar";

customElements.define(
  "tds-progress-bar",
  buildCustomElementConstructor(ProgressBar)
);

describe("tds-progress-bar", () => {
  it("works", () => {
    renderIntoBody(
      html`
        <tds-progress-bar></tds-progress-bar>
      `
    );
  });
});
