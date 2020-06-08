import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import PromoA from "tm/promoA";

customElements.define("tm-prom-a", buildCustomElementConstructor(PromoA));

describe("tm-prom-a", () => {
  let open: jest.Mock;
  Object.defineProperty(window, "open", { get: () => open });
  beforeEach(() => {
    open = jest.fn();
  });
  it("handles click on the image", async () => {
    let element = renderIntoBody(
      html`
        <tm-prom-a
          cta-href="/promo"
          cta-target="_blank"
          cta-title="Promo"
        ></tm-prom-a>
      `
    );
    element.shadowRoot!.querySelector("div")!.click();
    expect(open).toHaveBeenCalledWith("/promo", "_blank");
  });
  it("stops propogation on the tds-button-link", async () => {
    let element = renderIntoBody(
      html`
        <tm-prom-a
          cta-href="/promo"
          cta-target="_blank"
          cta-title="Promo"
        ></tm-prom-a>
      `
    );
    element
      .shadowRoot!.querySelector("tds-button-link")!
      .shadowRoot!.querySelector("a")!
      .click();
    expect(open).not.toHaveBeenCalled();
  });
});
