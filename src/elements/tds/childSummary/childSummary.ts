import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api complete: boolean = false;
  @api path: string | null = null;
  @api subtitle: string | null = null;
  @api title: string = "";

  private onClick(e: MouseEvent) {
    if (!this.path) {
      this.dispatchEvent(new CustomEvent("navigate"));
    }
  }

  private get computedRole() {
    return this.path ? "link" : "button";
  }
}
