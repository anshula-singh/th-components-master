import { api } from "lwc";

import { ChildrenElement } from "../../../shared/elements/children";

export type CTA = {
  href: string;
  target?: string;
  title: string;
  variant: string;
};

export default class extends ChildrenElement<CTA> {
  @api pretitle: string | null = null;
  @api title: string = "";

  childTagName = "TM-CTA";
  extractor = (element: Element) => {
    return {
      href: element.getAttribute("href")!,
      target: element.getAttribute("target") || undefined,
      title: element.getAttribute("title")!,
      variant: element.getAttribute("variant") || "neutral"
    };
  };
}
