import { ChildrenElement } from "../../../shared/elements/children";

type Item = {
  ariaCurrent: string | null;
  href: string;
  title: string;
};

export default class extends ChildrenElement<Item> {
  childTagName = "TM-PAGE-NAVIGATION-ITEM";
  extractor = (element: Element) => {
    return {
      ariaCurrent: element.hasAttribute("active") ? "page" : null,
      href: element.getAttribute("href"),
      title: element.getAttribute("title")
    } as Item;
  };
}
