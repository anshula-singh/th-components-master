import { Card, CardImageVariant, extractCardAttributes } from "tm/card";

import { ChildrenElement } from "../../../shared/elements/children";

type GridCard = Card & { imgVariant: CardImageVariant };

export default class extends ChildrenElement<Card> {
  childTagName = "TM-GRID-ITEM";
  extractor = extractCardAttributes;

  get grid(): GridCard[] {
    return [
      { ...this.items[0], imgVariant: "right--cover" },
      { ...this.items[1], imgVariant: "right--cover" },
      { ...this.items[2], imgVariant: "left--small" },
      { ...this.items[3], imgVariant: "left--small" },
      { ...this.items[4], imgVariant: "left--cover" }
    ];
  }
}
