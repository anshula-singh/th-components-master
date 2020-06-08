import { TOKEN_PATH } from "../lib/search";
import { RECENTS_PATH } from "../lib/user";
import { CONFIG_PATH } from "../search";

import * as responses from "./responses";

export { responses };

export function requestUrls(baseUrl: string = "") {
  return {
    config: `${baseUrl}${CONFIG_PATH}`,
    recents: `${baseUrl}${RECENTS_PATH}`,
    token: `${baseUrl}${TOKEN_PATH}`
  };
}

export function mockResponse(url: string) {
  let urls = requestUrls();
  if (url.includes(urls.config)) return JSON.stringify(responses.config);
  if (url.includes(urls.recents)) return JSON.stringify(responses.recents);
  if (url.includes(urls.token)) return JSON.stringify(responses.token);
  if (url.includes(responses.config.data.coveo.querySuggestUrl))
    return JSON.stringify(responses.completions);
}
