import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import ChildSummary from "tds/childSummary";

customElements.define(
  "tds-child-summary",
  buildCustomElementConstructor(ChildSummary)
);

describe("tds-child-summary", () => {
  it("works", () => {
    renderIntoBody(
      html`
        <tds-child-summary></tds-child-summary>
      `
    );
  });
});
