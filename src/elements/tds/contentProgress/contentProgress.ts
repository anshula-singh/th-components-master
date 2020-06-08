import { api, LightningElement } from "lwc";

import { hoursMinutesLeftLabel } from "../../../shared/labels/timeHelpers";

export default class extends LightningElement {
  @api lang: string = "en";
  @api progress: number | null = null;
  @api estimatedTimeLeft: number | null = null;
  @api finishedAt: string | null = null;

  private get valueStyle() {
    return `width: ${this.progress}%`;
  }

  private get showComplete() {
    return this.finishedAt;
  }

  private get showProgress() {
    return this.progress && !this.finishedAt;
  }

  private get showText() {
    return !this.progress && !this.finishedAt;
  }

  private get estimatedTimeLeftLabel() {
    if (this.estimatedTimeLeft) {
      return hoursMinutesLeftLabel(this.lang, this.estimatedTimeLeft);
    }
  }

  private get finishedAtLabel() {
    if (!this.finishedAt) return "";
    try {
      let [locale] = Intl.DateTimeFormat.supportedLocalesOf([this.lang]);
      return new Intl.DateTimeFormat(locale).format(new Date(this.finishedAt));
    } catch (e) {
      return "";
    }
  }
}
