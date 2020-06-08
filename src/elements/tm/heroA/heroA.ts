import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api background: "white" | "dark" | "light" = "white";
  @api ctaHref: string | undefined;
  @api ctaLabel: string | undefined;
  @api ctaTarget: string | undefined;
  @api imgSrc: string | undefined;
  @api imgAlign: "bottom" | "center" = "center";
  @api subtitle: string | undefined;
  @api title: string = "";

  private get buttonVariant() {
    return this.background === "dark" ? "neutral" : "brand";
  }

  private get heroClassName() {
    return `hero hero--${this.background}`;
  }

  private get contentEndClassName() {
    return `content-end content-end--${this.imgAlign}`;
  }
}
