import { track } from "lwc";

import { ChildrenElement } from "../../../shared/elements/children";

export type Item = {
  description: string;
  title: string;
};

export default class extends ChildrenElement<Item> {
  childTagName = "TM-FAQ-ITEM";
  extractor = extractItemAttributes;

  @track expanded = new Set<number>();

  private get faqs() {
    return this.items.map((item, i) => {
      let isExpanded = this.expanded.has(i);
      return {
        ...item,
        className: `item ${isExpanded ? "item--expanded" : ""}`,
        id: `item-${i}`,
        expanded: isExpanded,
        onClick: () => {
          let expanded = new Set(this.expanded);
          if (expanded.has(i)) expanded.delete(i);
          else expanded.add(i);
          this.expanded = expanded;
        }
      };
    });
  }
}

export function extractItemAttributes(element: Element) {
  return {
    description: element.getAttribute("description"),
    title: element.getAttribute("title")
  } as Item;
}
