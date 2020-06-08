import { ChildrenElement } from "../../../shared/elements/children";

export type Feature = {
  ctaPrimaryHref: string;
  ctaPrimaryTitle: string;
  ctaSecondaryHref: string;
  ctaSecondaryTitle: string;
  description: string;
  imgSrc: string;
  title: string;
};

export default class extends ChildrenElement<Feature> {
  childTagName = "TM-GRID-ITEM";
  extractor = (element: Element) => {
    return {
      ctaPrimaryHref: element.getAttribute("cta-primary-href")!,
      ctaPrimaryTitle: element.getAttribute("cta-primary-title")!,
      ctaPrimaryTarget: element.getAttribute("cta-primary-target")!,
      ctaSecondaryHref: element.getAttribute("cta-secondary-href")!,
      ctaSecondaryTitle: element.getAttribute("cta-secondary-title")!,
      ctaSecondaryTarget: element.getAttribute("cta-secondary-target")!,
      description: element.getAttribute("description")!,
      imgSrc: element.getAttribute("img-src")!,
      title: element.getAttribute("title")!
    };
  };
}
