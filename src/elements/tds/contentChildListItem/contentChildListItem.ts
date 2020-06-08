import { api, LightningElement } from "lwc";
import { ChildSummary } from "../childSummary/types";
import { hoursMinutesLabel } from "../../../shared/labels/timeHelpers";
import { pointLabel } from "../../../shared/labels/pointHelpers";

export default class extends LightningElement {
  @api lang: string = "en";
  @api summary: ChildSummary = null!;

  private onNavigate() {
    this.dispatchEvent(new CustomEvent("navigate", { detail: this.summary }));
  }

  private get user() {
    return this.summary.user || { finishedAt: null, pointsEarned: null };
  }

  private get subtitle() {
    if (this.user.finishedAt) {
      return pointLabel(this.lang, this.user.pointsEarned);
    }

    if (this.summary.estimatedTime) {
      return hoursMinutesLabel(this.lang, this.summary.estimatedTime);
    }
  }

  private get complete() {
    return this.user.finishedAt ? true : false;
  }
}
