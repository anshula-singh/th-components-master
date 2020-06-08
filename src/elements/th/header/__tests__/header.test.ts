import { createElement } from "lwc";

import Header from "th/header";

describe("th-header", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("works", async () => {
    let element = createElement("th-header", { is: Header });
    document.body.appendChild(element);
  });
});
