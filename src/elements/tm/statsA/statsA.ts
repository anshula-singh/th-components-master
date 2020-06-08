import { ChildrenElement } from "../../../shared/elements/children";

export type ItemAttribute = string | null;

export type Item = {
  description: ItemAttribute;
  title: ItemAttribute;
};

export default class extends ChildrenElement<Item> {
  childTagName = "TM-STAT-ITEM";
  extractor = extractItemAttributes;
}

export function extractItemAttributes(element: Element) {
  return {
    description: element.getAttribute("description"),
    title: element.getAttribute("title")
  } as Item;
}
