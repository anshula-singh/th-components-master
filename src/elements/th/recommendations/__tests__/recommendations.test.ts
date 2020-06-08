import fetchMock from "jest-fetch-mock";
import { buildCustomElementConstructor } from "lwc";

import Recommendations from "../recommendations";
import {
  $,
  $testid,
  nextTick,
  html,
  renderIntoBody
} from "../../../../shared/testutils";

import * as mock from "../mocks";
import { ZONE } from "../config";

customElements.define(
  "th-recommendations",
  buildCustomElementConstructor(Recommendations)
);

describe("th-recommendations", () => {
  let urls = mock.requestUrls(String(process.env.API_URL));

  it("fetches the recommended items on render", async () => {
    jest.useFakeTimers();
    const apiName = "test-api-name";
    const contentType = "module";

    const query = new URLSearchParams({
      content_type: contentType,
      api_name: apiName,
      zone: ZONE
    }).toString();

    fetchMock.mockOnceIf(
      `${urls.recommendations}?${query}`,
      () =>
        new Promise(resolve =>
          setTimeout(
            resolve,
            500,
            JSON.stringify(mock.responses.recommendations.withItems)
          )
        )
    );

    const element = renderIntoBody(html`
      <th-recommendations
        api-name=${apiName}
        content-type=${contentType}
        .labels=${{ favorite: "Favorite" }}
        zone=${ZONE}
      ></th-recommendations>
    `);

    const handleReady = jest.fn();
    element.addEventListener("ready", handleReady);

    jest.runAllTimers();
    await nextTick();

    expect(handleReady).toHaveBeenCalled();

    const result = mock.responses.recommendations.withItems.data;

    let recs = $testid("rec-content-brick-compact", element);
    expect(recs.length!).toBe(result.length);

    let favoriteButtons = $("th-favorite-button", element);
    expect(favoriteButtons.length!).toBe(result.length);

    favoriteButtons.forEach((btn, idx) => {
      // @ts-ignore
      expect(btn.apiName).toBe(result[idx].apiName);
      // @ts-ignore
      expect(btn.contentType).toBe(result[idx].contentType);
      // @ts-ignore
      expect(btn.initialFavorited).toBe(result[idx].favorited);
    });
  });

  it("does not render anything if there are no items", async () => {
    jest.useFakeTimers();
    const apiName = "test-api-name";
    const contentType = "module";

    const query = new URLSearchParams({
      content_type: contentType,
      api_name: apiName,
      zone: ZONE
    }).toString();

    fetchMock.mockOnceIf(
      `${urls.recommendations}?${query}`,
      () =>
        new Promise(resolve =>
          setTimeout(
            resolve,
            500,
            JSON.stringify(mock.responses.recommendations.empty)
          )
        )
    );

    const element = renderIntoBody(html`
      <th-recommendations
        api-name=${apiName}
        content-type=${contentType}
        zone=${ZONE}
      ></th-recommendations>
    `);

    jest.runAllTimers();
    await nextTick();

    let recs = $testid("rec-content-brick-compact", element);
    expect(recs.length!).toBe(0);
  });
});
