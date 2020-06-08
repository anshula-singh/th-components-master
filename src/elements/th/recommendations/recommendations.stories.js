import fetchMock from "fetch-mock";
import { html } from "lit-html";

import { mockResponse } from "./mocks";

export default {
  title: "th/th-recommendations",
  parameters: {
    installMocks: () => {
      fetchMock.mock(mockResponse, mockResponse);
    },
    modules: [
      "/modules/tds-button-icon.js",
      "/modules/th-favorite-button.js",
      "/modules/th-recommendations.js"
    ]
  }
};

export const Base = () => html`
  <div style="max-width: 400px; padding: 2rem;">
    <th-recommendations
      content-type="module"
      api-name="workplace_equality_diversity_and_inclusion"
      zone="sample-module-recommendations"
      .labels=${{ favorite: "Favorite" }}
    ></th-recommendations>
  </div>
`;
