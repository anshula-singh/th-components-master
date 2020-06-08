import { api, LightningElement } from "lwc";

import { ContentSummary } from "../contentSummary/types";

export default class extends LightningElement {
  @api summary: ContentSummary | null = null;
}
