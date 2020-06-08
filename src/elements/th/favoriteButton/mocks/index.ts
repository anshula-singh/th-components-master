const API_PATH = "/users/favorites";

export function requestUrls(baseUrl: string = "") {
  return {
    favorites: `${baseUrl}${API_PATH}`
  };
}

export function mockResponse(url: string) {
  let urls = requestUrls();
  if (url.includes(urls.favorites)) return JSON.stringify({});
}
