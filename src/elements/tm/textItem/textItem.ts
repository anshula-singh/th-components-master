import { api, track, LightningElement } from "lwc";

export type TextItemAttribute = string | null;

export type ItemImageVariant = "left--small";

export type TextItem = {
  description: TextItemAttribute;
  iconSymbol: TextItemAttribute;
  iconSprite: TextItemAttribute;
  title: TextItemAttribute;
};

export default class extends LightningElement {
  @api description: TextItemAttribute = null;
  @api iconSymbol: TextItemAttribute = null;
  @api iconSprite: TextItemAttribute = null;
  @api iconVariant: ItemImageVariant | null = null;
  @api title: string = "";
  private get hasIcon() {
    return this.iconVariant && this.iconSymbol;
  }
}

export function extractTextItemAttributes(element: Element) {
  return {
    description: element.getAttribute("description"),
    iconSymbol: element.getAttribute("icon-symbol"),
    iconSprite: element.getAttribute("icon-sprite") || "utility",
    title: element.getAttribute("title")
  } as TextItem;
}
