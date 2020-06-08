import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import ButtonLink from "tds/buttonLink";

customElements.define(
  "tds-button-link",
  buildCustomElementConstructor(ButtonLink)
);

describe("tds-button-link", () => {
  it("reflects attributes", async () => {
    let element = renderIntoBody(
      html`
        <tds-button-link aria-label="Hello"></tds-button-link>
      `
    );
    expect(element.shadowRoot!.querySelector("a")).toHaveAttribute(
      "aria-label",
      "Hello"
    );
  });
});
