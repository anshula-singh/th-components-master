import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";
import { format } from "prettier";
import { toMatchSnapshot } from "jest-snapshot";

import * as search from "../src/elements/th/search/mocks";

process.env.API_URL = "https://www.trailhead.com";

// @ts-ignore
window.matchMedia = () => {
  return { matches: false, addListener: () => {}, removeListener: () => {} };
};

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
  // Add a global mockResponse (that can be reset or disabled per test)
  // that acts like a middleware. If none of the mock handlers return
  // a response, return an empty string
  fetchMock.mockResponse(async req => {
    search: {
      let response = search.mockResponse(req.url);
      if (response) return response;
    }
    return "";
  });
});

expect.extend({
  toMatchHTMLSnapshot(received, length) {
    return toMatchSnapshot.call(
      // @ts-ignore
      this,
      format(received, { parser: "html" }),
      "toMatchHTMLSnapshot"
    );
  }
});

afterEach(() => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
});
