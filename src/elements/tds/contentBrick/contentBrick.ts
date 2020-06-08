import { api, LightningElement } from "lwc";

import { ContentSummary } from "../contentSummary/types";

export default class extends LightningElement {
  @api summary: ContentSummary | null = null;

  private get borderTopStyles() {
    return `border-top-color: ${this.summary!.color};`;
  }

  private onNavigate(e: CustomEvent<ContentSummary>) {
    this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: this.summary!
      })
    );
  }
}
