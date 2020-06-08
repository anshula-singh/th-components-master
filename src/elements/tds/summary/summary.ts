import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api description: string | null = null;
  @api displayMode: "brick" | "brick-tile" | "tile" = "tile";
  @api compact: boolean | string | null = null;
  @api path: string | null = null;
  @api pathTarget: string | null = null;
  @api pretitle: string | null = null;
  @api pretitleLinkHref: string | null = null;
  @api pretitleLinkTarget: string | null = null;
  @api pretitleLinkTitle: string | null = null;
  @api title: string = "";

  private isTile = true;

  connectedCallback() {
    this.onMediaQueryTile(mediaQueryTile);
    mediaQueryTile.addListener(this.onMediaQueryTile);
  }

  disconnectedCallback() {
    mediaQueryTile.removeListener(this.onMediaQueryTile);
  }

  private get isCompact() {
    return typeof this.compact === "boolean"
      ? this.compact
      : this.compact !== null;
  }

  private onMediaQueryTile = (e: { matches: boolean }) => {
    this.isTile =
      this.displayMode === "tile" ||
      (this.displayMode === "brick-tile" && mediaQueryTile.matches);
  };

  private onTitleClick(e: MouseEvent) {
    if (!this.path) {
      this.dispatchEvent(new CustomEvent("navigate"));
    }
  }

  private get showHeader() {
    return this.template.host.querySelector(`[slot="image"],[slot="action"]`);
  }

  private get showDescription() {
    return !this.isCompact;
  }

  private get showFooter() {
    return this.template.host.querySelector(`[slot^="meta"]`);
  }

  private get titleRole() {
    return this.path ? "link" : "button";
  }

  private get titleTabindex() {
    return this.path ? "" : "0";
  }
}

export const mediaQueryTile = window.matchMedia(`(max-width: 640px)`);
