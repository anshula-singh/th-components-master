import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api background: "white" | "dark" | "light" = "white";
  @api backgroundSrc: string | undefined;
  @api ctaHref: string | undefined;
  @api ctaLabel: string | undefined;
  @api ctaTarget: string | undefined;
  @api imgSrc: string | undefined;
  @api subtitle: string | undefined;
  @api title: string = "";

  private get buttonVariant() {
    return this.background === "dark" ? "neutral" : "brand";
  }

  private get heroClassName() {
    return `hero hero--${this.background}`;
  }

  private get backgroundStyle() {
    return this.backgroundSrc
      ? `background-image: url(${this.backgroundSrc})`
      : "";
  }
}
