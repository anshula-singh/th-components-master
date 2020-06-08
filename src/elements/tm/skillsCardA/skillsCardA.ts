import { api } from "lwc";

import { ChildrenElement } from "../../../shared/elements/children";

export type Item = {
  href: string;
  title: string;
  value: string;
};

export default class extends ChildrenElement<Item> {
  @api title: string = "";
  @api description: string | null = null;
  @api theme: "cold" | "warm" = "cold";

  childTagName = "TM-SKILL-ITEM";
  extractor = extractItemAttributes;

  private get skills() {
    return this.items.map(item => {
      return {
        ...item,
        valueClassName: `progress-value progress-value--${this.theme}`,
        valueStyle: `width: ${item.value}%`
      };
    });
  }
}

export function extractItemAttributes(element: Element) {
  return {
    href: element.getAttribute("href"),
    title: element.getAttribute("title"),
    value: element.getAttribute("value")
  } as Item;
}
