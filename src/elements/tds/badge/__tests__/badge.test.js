import { buildCustomElementConstructor } from "lwc";
import { html, renderIntoBody } from "../../../../shared/testutils";

import Badge from "tds/badge";

customElements.define("tds-badge", buildCustomElementConstructor(Badge));

describe("tds-badge", () => {
  it("works", () => {
    renderIntoBody(
      html`
        <tds-badge></tds-badge>
      `
    );
  });
});
