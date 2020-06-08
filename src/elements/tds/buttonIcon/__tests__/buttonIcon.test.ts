import { buildCustomElementConstructor } from "lwc";

import { html, renderIntoBody } from "../../../../shared/testutils";

import ButtonIcon from "tds/buttonIcon";

customElements.define(
  "tds-button-icon",
  buildCustomElementConstructor(ButtonIcon)
);

describe("tds-button-icon", () => {
  it("reflects attributes", async () => {
    let element = renderIntoBody(
      html`
        <tds-button-icon aria-label="Hello"></tds-button-icon>
      `
    );
    expect(element.shadowRoot!.querySelector("button")).toHaveAttribute(
      "aria-label",
      "Hello"
    );
  });
});
