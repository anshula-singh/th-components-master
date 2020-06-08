import "../th-element-loader";

const SPINNER_TIMEOUT = 200;
const READY_CHECK_INTERVAL = 200;
const LAZY_TIMEOUT = 200;

describe("th-element-loader", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("delays the spinner", async () => {
    jest.useFakeTimers();
    let name = getElementName();
    document.body.innerHTML = `
      <th-element-loader element="${name}"></th-element-loader>
      <${name}>Content</${name}>
    `;
    let shadowRoot = document.querySelector("th-element-loader")!.shadowRoot!;
    let spinner = shadowRoot.querySelector(".spinner");
    expect(spinner).not.toHaveClass("spinner_show");
    jest.advanceTimersByTime(SPINNER_TIMEOUT + 50);
    expect(spinner).toHaveClass("spinner_show");
  });
  it("cancels the spinner", async () => {
    jest.useFakeTimers();
    let name = getElementName();
    document.body.innerHTML = `
      <th-element-loader element="${name}"></th-element-loader>
      <${name}>Content</${name}>
    `;
    let shadowRoot = document.querySelector("th-element-loader")!.shadowRoot!;
    let spinner = shadowRoot.querySelector(".spinner");
    expect(spinner).not.toHaveClass("spinner_show");
    jest.runTimersToTime(SPINNER_TIMEOUT - 50);
    customElements.define(name, getElement());
    await nextTick();
    jest.runTimersToTime(SPINNER_TIMEOUT + 50);
    expect(spinner).not.toHaveClass("spinner_show");
  });
  it("waits for the element to be registered and have shadowRoot innerHTML", async () => {
    jest.useFakeTimers();
    let name = getElementName();
    document.body.innerHTML = `
      <th-element-loader element="${name}"></th-element-loader>
      <${name}>Content</${name}>
    `;
    expect(document.querySelector("th-element-loader")).toBeInTheDocument();
    customElements.define(name, getElement(true));
    await nextTick();
    expect(document.querySelector("th-element-loader")).toBeInTheDocument();
    jest.runTimersToTime(LAZY_TIMEOUT + READY_CHECK_INTERVAL);
    await nextTick();
    expect(document.querySelector("th-element-loader")).not.toBeInTheDocument();
  });
  it("fades element in", async () => {
    jest.useFakeTimers();
    let name = getElementName();
    document.body.innerHTML = `
      <th-element-loader element="${name}"></th-element-loader>
      <${name}>Content</${name}>
    `;
    expect(document.querySelector("th-element-loader")).toBeInTheDocument();
    customElements.define(name, getElement());
    expect(document.querySelector(name)).toHaveStyle("opacity: 0;");
    await nextTick();
    expect(document.querySelector("th-element-loader")).not.toBeInTheDocument();
    expect(document.querySelector(name)).toHaveStyle("opacity: 1;");
  });
});

const getElementName = (() => {
  let count = 0;
  return () => `my-element-${count++}`;
})();

const getElement = (lazy = false) =>
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      if (lazy) {
        setTimeout(() => {
          this.shadowRoot!.innerHTML = "<h1>Hello World</h1>";
        }, LAZY_TIMEOUT);
      } else {
        this.shadowRoot!.innerHTML = "<h1>Hello World</h1>";
      }
    }
  };

function nextTick() {
  return new Promise(resolve => {
    process.nextTick(resolve);
  });
}
