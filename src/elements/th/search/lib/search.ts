import { csrfHeader, getJSON, postJSON } from "../../../../shared/fetch";

export type Completion = {
  expression: string;
  score: number;
  highlighted: string;
  executableConfidence: number;
};

let accessToken: string | undefined;

export const TOKEN_PATH = "/search/tokens";

export async function getAccessToken(csfrToken: string) {
  if (accessToken) return accessToken;
  ({ token: accessToken } = await postJSON<{ token: string }>(
    `${process.env.API_URL}${TOKEN_PATH}`,
    {
      headers: csrfHeader(csfrToken)
    }
  ));
  return accessToken;
}

export async function getCompletionsUrl(params: {
  baseUrl: string;
  csfrToken: string;
  locale: string;
  terms: string;
}) {
  let { baseUrl, csfrToken, locale, terms } = { ...params };
  if (!/^http/.test(baseUrl)) baseUrl = `${process.env.API_URL}${baseUrl}`;
  let query = new URLSearchParams({
    access_token: await getAccessToken(csfrToken),
    count: "10",
    enableWordCompletion: "true",
    locale,
    q: terms
  }).toString();
  return `${baseUrl}?${query}`;
}

export async function getCompletions(url: string, requestInit: RequestInit) {
  let { completions } = await getJSON<{ completions: Completion[] }>(
    url,
    requestInit
  );
  return completions;
}
