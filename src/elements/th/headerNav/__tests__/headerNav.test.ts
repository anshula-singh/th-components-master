import { createElement } from "lwc";

import HeaderNav from "th/headerNav";

import { items } from "../__fixtures__";

jest.useFakeTimers();

describe("th-header-nav", () => {
  let element: HTMLElement;
  let shadow: ShadowRoot;
  beforeEach(() => {
    element = createElement("th-header-nav", { is: HeaderNav });
    shadow = element.shadowRoot!;
    // @ts-ignore
    element.items = items;
    document.body.appendChild(element);
  });
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("closes the menu on focusout", async () => {
    let clickEvent = new MouseEvent("click", {
      bubbles: false,
      cancelable: true
    });
    let focusOutEvent = new FocusEvent("focusout", {
      bubbles: false,
      cancelable: true
    });
    // Open the menu
    shadow
      .querySelector(".nav-list-item:nth-child(2) button")!
      .dispatchEvent(clickEvent);
    await Promise.resolve();
    expect(shadow.querySelector("th-header-nav-item")).not.toBeNull();
    // Simulate activeElement
    let $activeElement: any = shadow.querySelector("button");
    Object.defineProperty(shadow, "activeElement", {
      get: () => $activeElement
    });
    // The focusout out event alone does not cause the menu to close
    // since we still have an active element in the shadow
    shadow.querySelector(".nav-list")!.dispatchEvent(focusOutEvent);
    jest.runAllTimers();
    await Promise.resolve();
    expect(shadow.querySelector("th-header-nav-item")).not.toBeNull();
    // If the nav is no longer focused, the shadow's activeElement will be null
    $activeElement = null;
    shadow.querySelector(".nav-list")!.dispatchEvent(focusOutEvent);
    jest.runAllTimers();
    await Promise.resolve();
    expect(shadow.querySelector("th-header-nav-item")).toBeNull();
  });
  it("closes the menu on requestclose", async () => {
    let downArrowEvent = new KeyboardEvent("keydown", {
      bubbles: false,
      cancelable: true,
      key: "ArrowDown"
    });
    let requestCloseEvent = new CustomEvent("requestclose", {
      bubbles: false,
      cancelable: true
    });
    // Open the menu
    shadow
      .querySelector(".nav-list-item:nth-child(2) button")!
      .dispatchEvent(downArrowEvent);
    await Promise.resolve();
    expect(shadow.querySelector("th-header-nav-item")).not.toBeNull();
    // Close the menu
    shadow
      .querySelector("th-header-nav-item")!
      .dispatchEvent(requestCloseEvent);
    jest.runAllTimers();
    await Promise.resolve();
    expect(shadow.querySelector("th-header-nav-item")).toBeNull();
  });
  it("opens/closes the menu on mouseenter/leave", async () => {
    let mouseEvent = new MouseEvent("mouseenter", {
      bubbles: false,
      cancelable: true
    });
    let mouseEventLeave = new MouseEvent("mouseleave", {
      bubbles: false,
      cancelable: true
    });
    // Open the menu
    shadow
      .querySelector(".nav-list-item:nth-child(2) button")!
      .dispatchEvent(mouseEvent);
    await Promise.resolve();
    expect(
      shadow.querySelector(".nav-list-item:nth-child(2) th-header-nav-item")
    ).not.toBeNull();
    // Close the menu
    shadow.querySelector(".nav-list")!.dispatchEvent(mouseEventLeave);
    await Promise.resolve();
    expect(
      shadow.querySelector(".nav-list-item th-header-nav-item")
    ).toBeNull();
  });
  it("closes the current menu when a new item is focused", async () => {
    let mouseEvent = new MouseEvent("mouseenter", {
      bubbles: false,
      cancelable: true
    });
    // Open the menu
    shadow
      .querySelector(".nav-list-item:nth-child(2) button")!
      .dispatchEvent(mouseEvent);
    await Promise.resolve();
    expect(
      shadow.querySelector(".nav-list-item:nth-child(2) th-header-nav-item")
    ).not.toBeNull();
    // Hover on an item with no menu
    shadow
      .querySelector(".nav-list-item:nth-child(1) a")!
      .dispatchEvent(mouseEvent);
    await Promise.resolve();
    expect(
      shadow.querySelector(".nav-list-item th-header-nav-item")
    ).toBeNull();
  });
});
