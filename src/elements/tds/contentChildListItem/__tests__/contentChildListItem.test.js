import { buildCustomElementConstructor } from "lwc";
import ContentChildListItem from "tds/contentChildListItem";

import { html, renderIntoBody } from "../../../../shared/testutils";

customElements.define(
  "tds-content-child-list-item",
  buildCustomElementConstructor(ContentChildListItem)
);

describe("tds-content-child-list-item", () => {
  it("works", () => {
    renderIntoBody(html`
      <tds-content-child-list-item .summary=${{}}></tds-content-child-list-item>
    `);
  });
});
