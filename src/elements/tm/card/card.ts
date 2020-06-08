import { api, track, LightningElement } from "lwc";

export type CardAttribute = string | null;

export type CardImageVariant =
  | "top--cover"
  | "top--small"
  | "left--small"
  | "left--cover"
  | "right--cover";

export type Card = {
  ctaHref: CardAttribute;
  ctaTarget: CardAttribute;
  ctaTitle: CardAttribute;
  description: CardAttribute;
  imgSrc: CardAttribute;
  pretitle: CardAttribute;
  pretitleHref: CardAttribute;
  pretitleHrefText: CardAttribute;
  title: CardAttribute;
};

export default class extends LightningElement {
  @api ctaHref: CardAttribute = null;
  @api ctaTarget: CardAttribute = null;
  @api ctaTitle: CardAttribute = null;
  @api description: CardAttribute = null;
  @api imgAspect: CardAttribute = null;
  @api imgSrc: CardAttribute = null;
  @api imgVariant: CardImageVariant = "top--cover";
  @api pretitle: CardAttribute = null;
  @api pretitleHref: CardAttribute = null;
  @api pretitleHrefText: CardAttribute = null;
  @api title: string = "";

  @track private snapToTop = mediaQuerySnapToTop.matches;

  private get imgStyle() {
    if (!this.imgSrc) return "";
    let { imgVariantResponsive: variant } = this;
    let style: string[] = [];
    if (variant.includes("cover"))
      style.push(`background-image: url(${this.imgSrc})`);
    if (variant === "top--cover") {
      style.push(`padding-top: ${this.imgAspect || "40%"}`);
    }
    return style.join(";");
  }

  private get imgTag() {
    return this.imgVariant.includes("small");
  }

  private get imgVariantResponsive() {
    if (!this.snapToTop) return this.imgVariant;
    return String(this.imgVariant).replace(/left|right/, "top");
  }

  connectedCallback() {
    mediaQuerySnapToTop.addListener(this.onMediaQuerySnapToTop);
  }

  disconnectedCallback() {
    mediaQuerySnapToTop.removeListener(this.onMediaQuerySnapToTop);
  }

  private onImageClick(e: MouseEvent) {
    let { ctaHref, ctaTarget } = this;
    if (ctaHref) {
      if (ctaTarget) window.open(ctaHref, ctaTarget);
      else window.location.href = ctaHref;
    }
  }

  private onMediaQuerySnapToTop = (e: MediaQueryListEvent) => {
    this.snapToTop = e.matches;
  };
}

export function extractCardAttributes(element: Element) {
  return {
    ctaHref: element.getAttribute("cta-href")!,
    ctaTarget: element.getAttribute("cta-target")!,
    ctaTitle: element.getAttribute("cta-title")!,
    description: element.getAttribute("description"),
    imgSrc: element.getAttribute("img-src"),
    pretitle: element.getAttribute("pretitle"),
    pretitleHref: element.getAttribute("pretitle-href"),
    pretitleHrefText: element.getAttribute("pretitle-href-text"),
    title: element.getAttribute("title")
  } as Card;
}

// tm-card-grid taks care of adjusting the grid to the correct number
// of columns at smaller view ports
export const mediaQuerySnapToTop = window.matchMedia(`(max-width: 500px)`);
