import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

export default {
  title: "th/th-element-loader",
  parameters: {
    modules: ["/scripts/th-element-loader.js"],
    chromatic: {
      delay: 500
    }
  }
};

export const Base = () => {
  let name = getElementName();
  setTimeout(() => {
    customElements.define(name, getElement());
  }, 200);
  return html`
    ${unsafeHTML(`<${name}>Content</${name}`)}
    <th-element-loader element=${name}></th-element-loader>
  `;
};

export const Spinner = () => {
  let name = getElementName();
  setTimeout(() => {
    customElements.define(name, getElement(1000));
  }, 500);
  return html`
    ${unsafeHTML(`<${name}>Content</${name}`)}
    <th-element-loader element=${name}></th-element-loader>
  `;
};

Spinner.story = {
  parameters: {
    chromatic: {
      disable: true
    }
  }
};

const getElementName = (() => {
  let count = 0;
  return () => `th-element-loader-test-${count++}`;
})();

const getElement = (delay = 0) =>
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      if (delay > 0) {
        setTimeout(() => {
          this.shadowRoot.innerHTML = "<h1>Hello World</h1>";
        }, delay);
      } else {
        this.shadowRoot.innerHTML = "<h1>Hello World</h1>";
      }
    }
  };
