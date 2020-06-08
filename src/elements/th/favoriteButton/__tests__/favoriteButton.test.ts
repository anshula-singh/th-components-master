import fetchMock from "jest-fetch-mock";
import { buildCustomElementConstructor } from "lwc";

import FavoriteButton from "../favoriteButton";
import {
  $,
  nextTick,
  html,
  renderIntoBody
} from "../../../../shared/testutils";

import * as mock from "../mocks";

const elementName = "th-favorite-button";

customElements.define(
  elementName,
  buildCustomElementConstructor(FavoriteButton)
);

describe(elementName, () => {
  let urls = mock.requestUrls(String(process.env.API_URL));

  it("renders the favorite button", async () => {
    jest.useFakeTimers();
    const apiName = "test-api-name";
    const contentType = "module";
    const csrfToken = "token";
    const initialFavorited = true;

    fetchMock.mockOnceIf(
      `${urls.favorites}`,
      () => new Promise(resolve => setTimeout(resolve, 500, JSON.stringify({})))
    );

    const element = renderIntoBody(html`
      <th-favorite-button
        api-name=${apiName}
        content-type=${contentType}
        csrf-token=${csrfToken}
        .initialFavorited=${initialFavorited}
        .labels=${{ favorite: "Favorite" }}
      ></th-favorite-button>
    `);

    const handleFavorite = jest.fn();
    element.addEventListener("favorite", handleFavorite);

    $("tds-button-icon", element)[0].dispatchEvent(
      new MouseEvent("click", { bubbles: true })
    );

    jest.runAllTimers();
    await nextTick();

    expect(handleFavorite).toHaveBeenCalled();
  });
});
