import { api, LightningElement } from "lwc";

import {
  createVariantClassName,
  reflectAttributes,
  Variant
} from "../button/button";

export default class extends LightningElement {
  @api href: string | null = null;
  @api target: "_self" | "_blank" | "_parent" | "_top" | null = null;
  @api variant: Variant = "neutral";

  private get className() {
    return createVariantClassName(this.variant);
  }

  renderedCallback() {
    reflectAttributes(this);
  }
}
