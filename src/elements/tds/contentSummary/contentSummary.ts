import { api, LightningElement } from "lwc";

import { ContentSummary } from "./types";

import { hoursMinutesLabel } from "../../../shared/labels/timeHelpers";
import { pointLabel } from "../../../shared/labels/pointHelpers";

export default class extends LightningElement {
  @api compact: boolean = false;
  @api displayMode: "brick" | "brick-tile" | "tile" = "tile";
  @api imageSize: "small" | "medium" | "large" = "medium";
  @api lang: string = "en";
  @api summary: ContentSummary = null!;

  private get user() {
    return this.summary.user || { finishedAt: null, pointsEarned: null };
  }

  private get iconChecked() {
    // consider removing this calculation and getting it from client instead
    // null checking?
    return this.user.finishedAt;
  }

  private get hasBgColor() {
    return this.summary.color && this.summary.type === "trail";
  }

  private onNavigate(e: CustomEvent<ContentSummary>) {
    this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: this.summary
      })
    );
  }

  private get points() {
    let points = this.user.pointsEarned
      ? this.user.pointsEarned
      : this.summary.points;

    return pointLabel(this.lang, points);
  }

  private get pretitleLink() {
    return this.summary.pretitleLink || {};
  }

  private get estimatedTime() {
    if (this.summary.estimatedTime) {
      return hoursMinutesLabel(this.lang, this.summary.estimatedTime);
    }
  }
}
