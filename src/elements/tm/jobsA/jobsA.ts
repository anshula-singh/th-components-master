import { ChildrenElement } from "../../../shared/elements/children";

export type Job = {
  company: string;
  ctaHref: string;
  ctaTitle: string;
  featured: string | null;
  imgSrc: string;
  location: string;
  position: string;
  salary: string;
  time: string;
  type: string;
};

export default class extends ChildrenElement<Job> {
  childTagName = "TM-JOB-ITEM";
  extractor = (element: Element) => {
    return {
      company: element.getAttribute("company")!,
      ctaHref: element.getAttribute("cta-href")!,
      ctaTitle: element.getAttribute("cta-title")!,
      ctaTarget: element.getAttribute("cta-target")!,
      featured: element.getAttribute("featured"),
      imgSrc: element.getAttribute("img-src")!,
      location: element.getAttribute("location")!,
      position: element.getAttribute("position")!,
      salary: element.getAttribute("salary")!,
      time: element.getAttribute("time")!,
      type: element.getAttribute("type")!
    };
  };

  private get jobs() {
    return this.items.map(item => ({
      ...item,
      className: `card card-base ${item.featured ? "featured" : ""}`
    }));
  }
}
