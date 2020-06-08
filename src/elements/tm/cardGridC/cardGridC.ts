import { api } from "lwc";

import { Card, extractCardAttributes } from "tm/card";

import { ChildrenElement } from "../../../shared/elements/children";

export default class extends ChildrenElement<Card> {
  @api imgAspect: string | null = null;

  childTagName = "TM-GRID-ITEM";
  extractor = extractCardAttributes;
}
