import { buildCustomElementConstructor } from "lwc";

import { $, $testid, html, renderIntoBody } from "../../../../shared/testutils";

import ContentBrickCompact from "tds/contentBrickCompact";
import { ContentSummary } from "../../contentSummary/types";

customElements.define(
  "tds-content-brick-compact",
  buildCustomElementConstructor(ContentBrickCompact)
);

describe("tds-content-brick-compact", () => {
  it("renders a content brick compact", async () => {
    const summary: ContentSummary = {
      id: "1",
      image: "/logo.png",
      path: "https://salesforce.com",
      pretitle: "Module",
      title: "Business Value proposition",
      type: "module"
    };
    const element = renderIntoBody(html`
      <tds-content-brick-compact
        .summary=${summary}
      ></tds-content-brick-compact>
    `);

    const img = $("img", element)[0] as HTMLImageElement;
    const a = $("a", element)[0] as HTMLAnchorElement;
    const content = $testid("content", element)[0];

    expect(img.src).toContain(summary.image);
    expect(a.href).toContain(summary.path);
    expect(content).toContainHTML(summary.title);
  });
});
