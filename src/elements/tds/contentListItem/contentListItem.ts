import { api, LightningElement } from "lwc";

import { ContentSummary } from "../contentSummary/types";

export default class extends LightningElement {
  @api lang: string = "en";
  @api summary: ContentSummary | null = null;
}
