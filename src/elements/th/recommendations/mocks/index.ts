import { RECOMMENDATIONS_PATH, FAVORITES_PATH } from "../config";
import * as responses from "./responses";

export { responses };

export function requestUrls(baseUrl: string = "") {
  return {
    recommendations: `${baseUrl}${RECOMMENDATIONS_PATH}`,
    favorites: `${baseUrl}${FAVORITES_PATH}`
  };
}

export function mockResponse(url: string) {
  let urls = requestUrls();
  if (url.includes(urls.recommendations))
    return JSON.stringify(responses.recommendations.withItems);
  if (url.includes(urls.favorites)) return JSON.stringify(responses.favorites);
}
