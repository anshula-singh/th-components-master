import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import ContentListItem from "tds/contentListItem";

customElements.define(
  "tds-content-brick",
  buildCustomElementConstructor(ContentListItem)
);

describe("tds-content-brick", () => {
  it("works", () => {
    renderIntoBody(html`
      <tds-content-brick .summary=${{}}></tds-content-brick>
    `);
  });
});
