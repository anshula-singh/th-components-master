import { buildCustomElementConstructor } from "lwc";

import FocusVisible from "ui/focusVisible";

customElements.define(
  "ui-focus-visible",
  buildCustomElementConstructor(FocusVisible)
);

describe("ui-focus-visible", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("defaults to true", async () => {
    document.body.innerHTML = `
      <ui-focus-visible>
        <div></div>
      <ui-focus-visible>
    `;
    expect(document.querySelector("div")).toHaveAttribute(
      "data-focus-visible",
      "true"
    );
  });
  it("handles mutation", async () => {
    document.body.innerHTML = `
      <ui-focus-visible>
      <ui-focus-visible>
    `;
    await Promise.resolve();
    document
      .querySelector("ui-focus-visible")!
      .appendChild(document.createElement("div"));
    await Promise.resolve();
    expect(document.querySelector("div")).toHaveAttribute(
      "data-focus-visible",
      "true"
    );
  });
  it("changes to false on mousedown", async () => {
    document.body.innerHTML = `
      <ui-focus-visible>
        <div></div>
      <ui-focus-visible>
    `;
    document.dispatchEvent(new MouseEvent("mousedown"));
    expect(document.querySelector("div")).toHaveAttribute(
      "data-focus-visible",
      "false"
    );
  });
  it("changes to false on mousemove", async () => {
    document.body.innerHTML = `
      <ui-focus-visible>
        <div></div>
      <ui-focus-visible>
    `;
    document.dispatchEvent(new MouseEvent("mousemove"));
    expect(document.querySelector("div")).toHaveAttribute(
      "data-focus-visible",
      "false"
    );
  });
  it("changes to true on keydown", async () => {
    document.body.innerHTML = `
      <ui-focus-visible>
        <div></div>
      <ui-focus-visible>
    `;
    document.dispatchEvent(new MouseEvent("mousemove"));
    expect(document.querySelector("div")).toHaveAttribute(
      "data-focus-visible",
      "false"
    );
    document.dispatchEvent(new KeyboardEvent("keydown"));
    expect(document.querySelector("div")).toHaveAttribute(
      "data-focus-visible",
      "true"
    );
  });
});
