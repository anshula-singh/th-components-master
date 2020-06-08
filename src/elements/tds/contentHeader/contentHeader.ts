import { api, LightningElement } from "lwc";

import { ContentSummary } from "../contentSummary/types";
import { lightenHex } from "../../../shared/color";

export default class extends LightningElement {
  @api lang: string = "en";
  @api summary: ContentSummary | null = null;

  private get borderTopStyles() {
    let { color } = this.summary!;
    if (!color || !/^#/.test(color)) return color;
    return `border-top-color: ${lightenHex(color, -0.08)}`;
  }

  private onNavigate(e: CustomEvent<ContentSummary>) {
    this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: this.summary!
      })
    );
  }
}
