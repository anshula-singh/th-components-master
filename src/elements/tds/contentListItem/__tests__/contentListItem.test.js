import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import ContentListItem from "tds/contentListItem";

customElements.define(
  "tds-content-list-item",
  buildCustomElementConstructor(ContentListItem)
);

describe("tds-content-list-item", () => {
  it("works", () => {
    renderIntoBody(html`
      <tds-content-list-item .summary=${{}}></tds-content-list-item>
    `);
  });
});
