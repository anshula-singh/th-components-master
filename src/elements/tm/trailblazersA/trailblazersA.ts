import { ChildrenElement } from "../../../shared/elements/children";

export type Trailblazer = {
  ctaHref: string;
  ctaTitle: string;
  imgSrc: string;
  location: string;
  name: string;
  profileHref: string;
  profileTitle: string;
  rank: string;
  role: string;
  since: string;
};

export default class extends ChildrenElement<Trailblazer> {
  childTagName = "TM-TRAILBLAZER-ITEM";
  extractor = (element: Element) => {
    return {
      ctaHref: element.getAttribute("cta-href")!,
      ctaTitle: element.getAttribute("cta-title")!,
      imgSrc: element.getAttribute("img-src")!,
      location: element.getAttribute("location")!,
      name: element.getAttribute("name")!,
      profileHref: element.getAttribute("profile-href")!,
      profileTitle: element.getAttribute("profile-title")!,
      rank: element.getAttribute("rank")!,
      role: element.getAttribute("role")!,
      since: element.getAttribute("since")!
    };
  };

  get trailblazers() {
    return this.items.map(item => ({
      ...item,
      style: [`background-image: url(${item.imgSrc})`].join(";")
    }));
  }
}
