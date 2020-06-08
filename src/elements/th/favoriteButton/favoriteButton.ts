import { api, track, LightningElement } from "lwc";
import { fetchJSON, postJSON, csrfHeader } from "../../../shared/fetch";

export const API_PATH = "/users/favorites";

type Variant = "bare" | "border-filled";

function getUrl(path: string) {
  return `${process.env.API_URL}${path}`;
}

export default class extends LightningElement {
  @api labels: { favorite: string } = undefined!;
  @api apiName: string = undefined!;
  @api contentType: string = undefined!;
  @api csrfToken: string = undefined!;
  @api variant: Variant = "bare";
  @api initialFavorited: boolean = false;

  @track favoritedState: boolean = false;

  get iconClass() {
    return this.favoritedState ? "favorited" : "";
  }

  handleToggleFavorite() {
    this.favoritedState = !this.favoritedState;

    const detail = {
      apiName: this.apiName,
      contentType: this.contentType,
      favorited: this.favoritedState
    };

    const toggleFavoritePromise = this.favoritedState
      ? this.favorite()
      : this.unfavorite();

    toggleFavoritePromise
      .then(() => {
        this.dispatchEvent(new CustomEvent("favorite", { detail }));
      })
      .catch(() => {
        this.favoritedState = !this.favoritedState;
      });
  }

  getFavoritePayload() {
    const body = {
      favorite: {
        favoritable_api_name: this.apiName,
        favoritable_type: this.contentType
      }
    };

    const headers = {
      ...csrfHeader(this.csrfToken),
      "Content-Type": "application/json; charset=utf-8"
    };
    const url = getUrl(API_PATH);

    return { body, headers, url };
  }

  favorite = () => {
    const { url, body, headers } = this.getFavoritePayload();

    return postJSON(url, body, { headers });
  };

  unfavorite = () => {
    const { url, body, headers } = this.getFavoritePayload();

    return fetchJSON(url, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers
    });
  };

  connectedCallback() {
    this.favoritedState = this.initialFavorited;
  }
}
