import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api ctaHref: string | null = null;
  @api ctaTarget: string | null = null;
  @api ctaTitle: string | null = null;
  @api imgAspect: string | null = null;
  @api imgSrc: string | null = null;
  @api description: string | null = null;
  @api shadowColorStart: string | null = null;
  @api shadowColorEnd: string | null = null;
  @api title: string = "";

  private get imageStyle() {
    return [`background-image: url(${this.imgSrc})`].join(";");
  }

  private get promoClassName() {
    return `promo ${this.showShadow ? "promo--shadow" : ""}`;
  }

  private get shadowStyle() {
    return [
      `--shadow-color-start: ${this.shadowColorStart}`,
      `--shadow-color-end: ${this.shadowColorEnd}`
    ].join(";");
  }

  private get showShadow() {
    return this.shadowColorStart && this.shadowColorEnd;
  }

  private get spacerStyle() {
    return `padding-top: ${this.imgAspect || "33%"}`;
  }

  private onClick(e: MouseEvent) {
    let { ctaHref, ctaTarget } = this;
    if (ctaHref) {
      if (ctaTarget) window.open(ctaHref, ctaTarget);
      else window.location.href = ctaHref;
    }
  }

  private onLinkClick(e: MouseEvent) {
    e.stopPropagation();
  }
}
