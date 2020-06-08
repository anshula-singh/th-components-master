import { createElement } from "lwc";

import headerNavItem from "th/headerNavItem";

import { items as navItems } from "../../headerNav/__fixtures__";

jest.useFakeTimers();

describe("th-header-nav-item", () => {
  let element: HTMLElement;
  let shadow: ShadowRoot;
  beforeEach(() => {
    element = createElement("th-header-nav-item", { is: headerNavItem });
    shadow = element.shadowRoot!;
    // @ts-ignore
    element.item = navItems[1];
    document.body.appendChild(element);
  });
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("focuses the first item", async () => {
    await Promise.resolve();
    expect(shadow.activeElement).toBe(shadow.querySelector("a"));
  });
  it("arrow up/down", async () => {
    let keydownEvent = (key: string) =>
      new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key
      });
    await Promise.resolve();
    expect(shadow.activeElement).toBe(shadow.querySelectorAll("a")[0]);
    shadow
      .querySelector(".menu__list")!
      .dispatchEvent(keydownEvent("ArrowDown"));
    await Promise.resolve();
    expect(shadow.activeElement).toBe(shadow.querySelectorAll("a")[1]);
    shadow.querySelector(".menu__list")!.dispatchEvent(keydownEvent("ArrowUp"));
    await Promise.resolve();
    expect(shadow.activeElement).toBe(shadow.querySelectorAll("a")[0]);
  });
});
