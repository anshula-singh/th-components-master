import { track, api, LightningElement } from "lwc";

import { getJSON } from "../../../shared/fetch";
import { debounce } from "../../../shared/debounce";
import { useEffectAttr } from "../../../shared/useEffectAttr";

import { ContentSummary } from "../../tds/contentSummary/types";

import { RECOMMENDATIONS_PATH, ZONE } from "./config";

export type RecommendationState = {
  _summary: ContentSummary;
};

export type RecommendationResponse = {
  iconUrl: string;
  url: string;
  title: string;
  apiName: string;
  favorited: boolean;
  contentType: string;
};

export type Recommendation = RecommendationResponse & RecommendationState;

export type Labels = {
  favorite: string;
};

export type FavoriteEvent = {
  detail: { apiName: string; contentType: string; favorited: false };
};

const take = (n: number, arr: Array<any>) => arr.slice(0, n);

const dispatchEvent = (
  elem: LightningElement,
  eventName: string,
  payload: any
) => elem.dispatchEvent(new CustomEvent(eventName, { detail: payload }));

function getUrl(path: string) {
  return `${process.env.API_URL}${path}`;
}

export default class extends LightningElement {
  @api size: number = 3;
  @api recommendationsPath: string = RECOMMENDATIONS_PATH;
  @api csrfToken: string = undefined!;
  @api labels: Labels = undefined!;

  @track recommendations: Array<Recommendation> = [];

  _contentType: string = undefined!;
  _apiName: string = undefined!;
  _zone: string = ZONE;

  @api
  get contentType() {
    return this._contentType;
  }

  set contentType(value) {
    this.fetchOnAttrChange();
    this._contentType = value;
  }

  @api
  get apiName() {
    return this._apiName;
  }

  set apiName(value) {
    this.fetchOnAttrChange();
    this._apiName = value;
  }

  @api
  get zone() {
    return this._zone;
  }

  set zone(value) {
    this.fetchOnAttrChange();
    this._zone = value;
  }

  dispatchReadyEvent = dispatchEvent.bind(null, this, "ready");
  dispatchFavoriteEvent = dispatchEvent.bind(null, this, "favorite");

  hasRecommendations() {
    const { recommendations } = this;
    return recommendations && recommendations.length > 0;
  }

  handleFavorite(event: FavoriteEvent) {
    this.dispatchFavoriteEvent(event.detail);
  }

  makeStateful: (recs: RecommendationResponse[]) => Recommendation[] = recs => {
    return recs.map(rec => {
      return {
        ...rec,
        _summary: {
          id: rec.url,
          image: rec.iconUrl,
          path: rec.url,
          pathTarget: "_blank",
          pretitle: rec.contentType,
          title: rec.title,
          type: rec.contentType as ContentSummary["type"]
        }
      };
    });
  };

  getRequestUrl = () => {
    const { recommendationsPath, contentType, apiName, zone } = this;

    const query = new URLSearchParams({
      content_type: contentType,
      api_name: apiName,
      zone: zone
    }).toString();

    const url = getUrl(recommendationsPath);

    return `${url}?${query}`;
  };

  processRecommendations = (recs: RecommendationResponse[]) => {
    let recommendations = take(this.size, recs);

    this.dispatchReadyEvent({ recommendations });
    this.recommendations = this.makeStateful(recommendations);
  };

  fetchRecommendations = () =>
    getJSON<{ data: Array<Recommendation> }>(this.getRequestUrl()).then(
      res => res.data
    );

  fetchOnAttrChange = debounce(
    useEffectAttr(
      () => {
        const required = [this.contentType, this.apiName, this.zone];
        const proceed = required.filter(Boolean).length === required.length;

        if (proceed) {
          this.fetchRecommendations()
            .then(this.processRecommendations)
            .catch(() => {
              this.dispatchReadyEvent({ recommendations: [] });
            });
        }
      },
      ["contentType", "apiName", "zone"],
      this
    ),
    100
  );
}
