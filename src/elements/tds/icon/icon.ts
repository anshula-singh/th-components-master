import { api, LightningElement } from "lwc";

import { ASSETS_URL } from "../../../shared/environment";

/* ROLLUP_PLATFORM
import * as iconUtils from 'lightning/iconUtils';
*/

type Size = "small" | "medium" | "large" | "override";

type Sprite =
  | "action"
  | "custom"
  | "doctype"
  | "social"
  | "social-round"
  | "utility";

const fetches = new Map<string, Promise<any>>();

export default class extends LightningElement {
  @api sprite: Sprite = "utility";
  @api size: Size = "medium";
  @api symbol: string = "";

  private crossOrigin = process.env.CROSS_ORIGIN_ASSETS === "true";
  private node: SVGSymbolElement | undefined;

  private get className() {
    return `size--${this.size}`;
  }

  private get href() {
    /* ROLLUP_PLATFORM
    return iconUtils.getIconPath(`${this.sprite}:${this.symbol}`);
    */
    return `${ASSETS_URL}/icons/${this.sprite}-sprite/svg/symbols.svg#${this.symbol}`;
  }

  private get symbolId() {
    return `tds__${this.sprite}__${this.symbol}`;
  }

  renderedCallback() {
    if (process.env.CROSS_ORIGIN_ASSETS === "true") this.appendNodes();
  }

  private async appendNodes() {
    if (process.env.NODE_ENV === "test") return;
    let { symbolId } = this;
    if (this.node && this.node.id === symbolId) return;
    await this.fetchSprite(this.sprite);
    let svg = this.template.querySelector("svg")!;
    let node = document
      .getElementById(symbolId)!
      .cloneNode(true) as SVGSymbolElement;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    for (let n of Array.from(node.childNodes)) svg.appendChild(n);
    svg.setAttribute("viewBox", node.getAttribute("viewBox")!);
  }

  private async fetchSprite(sprite: Sprite) {
    if (fetches.has(sprite)) return fetches.get(sprite);
    let promise = fetch(
      `${ASSETS_URL}/icons/${this.sprite}-sprite/svg/symbols.svg`
    )
      .then(res => res.text())
      .then(svg => svg.replace(/id=\"/g, `id="tds__${sprite}__`))
      .then(svg => {
        let node = document.createElement("div");
        node.innerHTML = svg;
        document.body.appendChild(node);
      });
    fetches.set(sprite, promise);
    return promise;
  }
}
