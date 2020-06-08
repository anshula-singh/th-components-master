import { api, LightningElement } from "lwc";

type Variant = "bare" | "border-filled";

import { reflectAttributes } from "../button/button";

export default class extends LightningElement {
  @api disabled: boolean | null = null;
  @api variant: Variant = "border-filled";

  private get className() {
    return [
      `button`,
      `button--${this.variant}`,
      this.disabled !== null && this.disabled !== false
        ? "button--disabled"
        : false
    ]
      .filter(Boolean)
      .join(" ");
  }

  renderedCallback() {
    reflectAttributes(this);
  }
}
