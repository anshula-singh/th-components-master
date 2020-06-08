import { LightningElement, api, track } from "lwc";

import { NavItem } from "../headerNav/types";

export default class extends LightningElement {
  // @ts-ignore
  // putting a "!" after item breaks Jest?
  @api item: NavItem;

  @track private activeIndex = 0;

  private _didFocus = false;

  private get itemCount() {
    return this.template.querySelectorAll("a").length;
  }

  private get columns(): { key: string; sections: NavItem[] }[] | undefined {
    if (!this.item.sections) return;
    let cols: number[] = this.item.sectionColumns || [
      this.item.sections.length
    ];

    return cols.map((c, i) => {
      let start = cols[i - 1] || 0;
      let end = start + c;
      return {
        key: String(i),
        sections: this.item.sections!.slice(start, end)
      };
    });
  }

  private onKeyDown(e: KeyboardEvent) {
    let { activeIndex } = this;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        activeIndex += 1;
        if (activeIndex === this.itemCount) activeIndex = 0;
        break;
      case "ArrowUp":
        e.preventDefault();
        activeIndex -= 1;
        if (activeIndex < 0) activeIndex = this.itemCount - 1;
        break;
      case "Esc":
      case "Escape":
        this.dispatchEvent(
          new CustomEvent("requestclose", { detail: this.item })
        );
    }
    this.activeIndex = activeIndex;
    this._didFocus = false;
  }

  renderedCallback() {
    if (!this._didFocus) {
      let element = this.template.querySelectorAll("a")[
        this.activeIndex
      ] as HTMLElement;
      if (!element) return;
      element.focus();
      this._didFocus = true;
    }
  }
}
