import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import Button from "tds/button";

customElements.define("tds-button", buildCustomElementConstructor(Button));

describe("tds-button", () => {
  it("reflects attributes", async () => {
    let element = renderIntoBody(
      html`
        <tds-button aria-label="Hello"></tds-button>
      `
    );
    expect(element.shadowRoot!.querySelector("button")).toHaveAttribute(
      "aria-label",
      "Hello"
    );
  });
});
