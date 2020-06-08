import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import ContentSummary from "tds/contentSummary";
import { ContentSummary as ContentSummaryType } from "../types";

customElements.define(
  "tds-content-summary",
  buildCustomElementConstructor(ContentSummary)
);

const summary: ContentSummaryType = {
  id: "1",
  image: "/logo.png",
  path: "https://salesforce.com",
  pretitle: "Module",
  title: "Business Value proposition",
  type: "module"
};

describe("tds-content-summary", () => {
  it("accepts an object", async () => {
    const element = renderIntoBody(html`
      <tds-content-summary .summary=${summary}></tds-content-summary>
    `);
    expect(
      element.shadowRoot!.querySelector("tds-summary")!.shadowRoot!.innerHTML
    ).toContain(summary.title);
  });
});
