import { api } from "lwc";

import { TextItem, extractTextItemAttributes } from "tm/textItem";

import { ChildrenElement } from "../../../shared/elements/children";

export default class extends ChildrenElement<TextItem> {
  @api iconType: "left" | null = null;

  private get variant() {
    switch (this.iconType) {
      case "left":
        return "left--large";
      default:
        return null;
    }
  }

  childTagName = "TM-GRID-ITEM";
  extractor = extractTextItemAttributes;
}
