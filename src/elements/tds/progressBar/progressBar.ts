import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api progress: number | null = null;

  private get valueStyle() {
    return `width: ${this.progress}%`;
  }
}
