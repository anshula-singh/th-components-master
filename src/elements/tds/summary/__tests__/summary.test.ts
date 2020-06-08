import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import Summary from "tds/summary";

customElements.define("tds-summary", buildCustomElementConstructor(Summary));

describe("tds-content-brick", () => {
  describe("compact (string)", () => {
    it("shows the description ", () => {
      let element = renderIntoBody(html`
        <tds-summary description="Hello"></tds-summary>
      `);
      expect(element.shadowRoot!.innerHTML).toContain("Hello");
    });
    it("hides the description (string)", () => {
      let element = renderIntoBody(html`
        <tds-summary compact description="Hello"></tds-summary>
      `);
      expect(element.shadowRoot!.innerHTML).not.toContain("Hello");
    });
  });
  describe("compact (bool)", () => {
    it("shows the description (string)", () => {
      let element = renderIntoBody(html`
        <tds-summary .compact=${false} description="Hello"></tds-summary>
      `);
      expect(element.shadowRoot!.innerHTML).toContain("Hello");
    });
    it("hides the description (bool)", () => {
      let element = renderIntoBody(html`
        <tds-summary .compact=${true} description="Hello"></tds-summary>
      `);
      expect(element.shadowRoot!.innerHTML).not.toContain("Hello");
    });
  });
});
