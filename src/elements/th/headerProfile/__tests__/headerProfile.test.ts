import { buildCustomElementConstructor } from "lwc";

import HeaderProfile from "th/headerProfile";

import { user } from "../__fixtures__/index";

customElements.define(
  "th-header-profile",
  buildCustomElementConstructor(HeaderProfile)
);

describe("th-header-profile", () => {
  let element: HTMLElement;
  let shadow: ShadowRoot;
  beforeEach(() => {
    element = document.createElement("th-header-profile");
    // @ts-ignore
    element.user = user;
    shadow = element.shadowRoot!;
    document.body.appendChild(element);
  });
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("opens the menu when the container is clicked", async () => {
    let clickEvent = new MouseEvent("click", {
      bubbles: false,
      cancelable: true
    });
    // Open the menu
    expect(shadow.querySelector(".menu")).toHaveAttribute(
      "aria-hidden",
      "true"
    );
    shadow.querySelector(".profile")!.dispatchEvent(clickEvent);
    await Promise.resolve();
    expect(shadow.querySelector(".menu")).toHaveAttribute(
      "aria-hidden",
      "false"
    );
  });
});
