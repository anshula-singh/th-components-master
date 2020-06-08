import fetchMock from "fetch-mock";
import { html } from "lit-html";

import { mockResponse } from "./mocks";

export default {
  title: "th/th-favorite-button",
  parameters: {
    installMocks: () => {
      fetchMock.mock(mockResponse, mockResponse);
    },
    modules: ["/modules/th-favorite-button.js", "/modules/tds-button-icon.js"]
  }
};

export const Base = () => html`
  <div style="max-width: 400px; padding: 2rem;">
    <th-favorite-button
      csrf-token="csrf"
      api-name="bob_the_builder"
      content-type="module"
      .initial-favorited=${true}
      .labels=${{ favorite: "Favorite" }}
    >
    </th-favorite-button>
  </div>
`;
