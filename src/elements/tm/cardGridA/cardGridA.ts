import { api } from "lwc";

import { Card, extractCardAttributes } from "tm/card";

import { ChildrenElement } from "../../../shared/elements/children";

export default class extends ChildrenElement<Card> {
  @api imgAspect: string | null = null;
  @api imgType: "full" | "left" | null = null;

  private get imgVariant() {
    switch (this.imgType) {
      case "full":
        return "top--cover";
      case "left":
        return "top--small";
      default:
        return "";
    }
  }

  childTagName = "TM-GRID-ITEM";
  extractor = extractCardAttributes;
}
