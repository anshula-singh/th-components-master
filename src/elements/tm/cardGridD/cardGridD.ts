import { Card, extractCardAttributes } from "tm/card";

import { ChildrenElement } from "../../../shared/elements/children";

export default class extends ChildrenElement<Card> {
  childTagName = "TM-GRID-ITEM";
  extractor = extractCardAttributes;
}
