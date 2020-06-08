import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api color: string | null = null;

  private get tileStyle() {
    return [
      `--border-color: ${this.color}`,
      `--border-width: ${this.color ? 6 : 0}px`
    ].join(";");
  }
}
