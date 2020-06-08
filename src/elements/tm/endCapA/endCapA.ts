import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api background: "white" | "dark" | "light" = "white";
  @api ctaHref: string | undefined;
  @api ctaLabel: string | undefined;
  @api ctaTarget: string | null = null;
  @api imgSrc: string | undefined;
  @api subtitle: string | undefined;
  @api title: string = "";

  private get endCapClassName() {
    return `end-cap end-cap--${this.background}`;
  }
}
