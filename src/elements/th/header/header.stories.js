import fetchMock from "fetch-mock";
import { html } from "lit-html";

import * as search from "../search/mocks";

export default {
  title: "th/th-header",
  parameters: {
    installMocks: () => {
      fetchMock.mock(search.mockResponse, search.mockResponse);
    },
    modules: ["/modules/th-header.js"]
  }
};

export const Base = () => html`
  <style>
    #root {
      padding: 0;
    }
  </style>
  <th-header></th-header>
`;
