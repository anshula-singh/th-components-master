import fetchMock from "jest-fetch-mock";
import { buildCustomElementConstructor } from "lwc";

import { default as Search } from "../search";

import * as mock from "../mocks";

customElements.define("th-search", buildCustomElementConstructor(Search));

let location = {};

Object.defineProperty(window, "location", {
  get: () => location
});

describe("th-search", () => {
  let element: HTMLElement;
  let shadow: ShadowRoot;
  let urls = mock.requestUrls(String(process.env.API_URL));
  beforeEach(() => {
    window.location.href = "/";
    element = document.createElement("th-search");
    shadow = element.shadowRoot!;
  });
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("waits for the config before loading recents", async () => {
    jest.useFakeTimers();
    fetchMock.mockOnceIf(
      urls.config,
      () =>
        new Promise(resolve =>
          setTimeout(resolve, 500, JSON.stringify(mock.responses.config))
        )
    );
    document.body.appendChild(element);
    let completions = () => shadow.querySelector('[data-testid="completions"]');
    let recents = () => shadow.querySelector('[data-testid="recents"]');
    shadow.querySelector("input")!.focus();
    expect(completions()).toBeNull();
    expect(recents()).toBeNull();
    shadow.querySelector("input")!.blur();
    jest.runAllTimers();
    await nextTick();
    expect(fetchMock.mock.calls[0][0]).toEqual(urls.config);
    expect(shadow.childNodes[0]).toHaveTextContent(
      mock.responses.config.data.labels.placeholder
    );
    shadow.querySelector("input")!.focus();
    expect(fetchMock.mock.calls[1][0]).toEqual(urls.recents);
    await nextTick();
    expect(completions()).toBeNull();
    expect(recents()).not.toBeNull();
    expect(shadow.childNodes[0]).not.toHaveTextContent(
      mock.responses.config.data.labels.recentItems
    );
    expect(shadow.childNodes[0]).toHaveTextContent(
      mock.responses.config.data.labels.recentFavorites
    );
  });
  it("waits for the config before loading suggestions", async () => {
    jest.useFakeTimers();
    fetchMock.mockOnceIf(
      urls.config,
      () =>
        new Promise(resolve =>
          setTimeout(resolve, 500, JSON.stringify(mock.responses.config))
        )
    );
    document.body.appendChild(element);
    let completions = () => shadow.querySelector('[data-testid="completions"]');
    shadow.querySelector("input")!.focus();
    expect(completions()).toBeNull();
    jest.runAllTimers();
    await nextTick();
    expect(fetchMock.mock.calls[0][0]).toEqual(urls.config);
    shadow.querySelector("input")!.value = "l";
    shadow.querySelector("input")!.dispatchEvent(new InputEvent("input"));
    jest.runAllTimers();
    await nextTick();
    expect(fetchMock.mock.calls[1][0]).toEqual(urls.token);
    expect(fetchMock.mock.calls[2][0]).toContain(
      mock.responses.config.data.coveo.querySuggestUrl
    );
    expect(shadow.childNodes[0]).toHaveTextContent(
      mock.responses.completions.completions[0].expression
    );
    expect(shadow.childNodes[0]).toHaveTextContent(
      mock.responses.completions.completions[1].expression
    );
  });
  it("submit", async () => {
    document.body.appendChild(element);
    await nextTick();
    shadow.querySelector("input")!.value = "lwc";
    shadow.querySelector("input")!.dispatchEvent(new InputEvent("input"));
    shadow.querySelector("input")!.dispatchEvent(
      new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: "Enter"
      })
    );
    expect(window.location.href).toEqual("/search?keywords=lwc");
  });
  it("suggestion", async () => {
    document.body.appendChild(element);
    await nextTick();
    jest.useFakeTimers();
    shadow.querySelector("input")!.focus();
    shadow.querySelector("input")!.value = "visual";
    shadow.querySelector("input")!.dispatchEvent(new InputEvent("input"));
    jest.runAllTimers();
    await nextTick();
    shadow
      .querySelectorAll(`[role="option"]`)[1]!
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(window.location.href).toEqual(
      "/search?keywords=Visualforce+Pages&suggested=true"
    );
  });
  it("recent", async () => {
    document.body.appendChild(element);
    await nextTick();
    shadow.querySelector("input")!.focus();
    await nextTick();
    shadow
      .querySelectorAll(`[role="option"]`)[0]!
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(window.location.href).toEqual(
      "/en/content/learn/modules/salesforce-cms-basics"
    );
  });
});

function nextTick() {
  return new Promise(resolve => {
    process.nextTick(resolve);
  });
}
