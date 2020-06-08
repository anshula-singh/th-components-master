import { buildCustomElementConstructor } from "lwc";

import { nextTick } from "../../../../shared/testutils";

import Page from "tm/page";

customElements.define("tm-page", buildCustomElementConstructor(Page));

describe("tm-page", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("provides a default slot", async () => {
    document.body.innerHTML = `
      <tm-page>Hello</tm-page>
    `;
    await nextTick();
    expect(
      document
        .querySelector("tm-page")!
        .shadowRoot!.querySelector("slot")!
        .assignedNodes()[0].textContent
    ).toEqual("Hello");
  });
});
