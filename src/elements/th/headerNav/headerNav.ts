import { api, LightningElement, track } from "lwc";

import { NavItem } from "./types";

type NavItemWithState = NavItem & {
  className: string;
  isExpanded: boolean;
};

const preloadedImages = new Set<string>();

export default class extends LightningElement {
  private _items: NavItem[] = [];
  @api get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
    this.preloadImages();
  }

  @track private expandedNavItem?: NavItem;

  private get navItemsWithState(): NavItemWithState[] {
    const { expandedNavItem } = this;
    return this.items.map(item => {
      const hasActiveItem = typeof expandedNavItem !== "undefined";
      const hasItems = typeof item.sections !== "undefined";
      // Can't compare navItems because of proxy
      const isExpanded =
        hasItems && hasActiveItem && item.label === expandedNavItem!.label;
      return {
        ...item,
        className: `nav-list-item ${
          item.sectionColumns ? "nav-list-item--columns" : ""
        }`,
        isExpanded
      };
    });
  }

  private get expandedIndex() {
    if (typeof this.expandedNavItem === "undefined") {
      return;
    }
    return this.items.indexOf(this.expandedNavItem);
  }

  private onItemClick(e: MouseEvent) {
    this.setActiveNavItem(e.currentTarget!);
  }

  private onItemFocus(e: FocusEvent) {
    this.expandedNavItem = undefined;
  }

  private onItemKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        this.setActiveNavItem(e.target!);
        break;
      }
    }
  }

  private onItemMouseEnter(e: FocusEvent) {
    this.setActiveNavItem(e.currentTarget!);
  }

  private onItemRequestClose(e: CustomEvent<NavItem>) {
    let { expandedIndex } = this;
    this.expandedNavItem = undefined;
    // Refocus the nav item when the expanded menu requests to close itself
    // (usually the escape key)
    if (typeof expandedIndex !== "undefined") {
      let element = this.template.querySelectorAll(
        ".nav-list-item__link,.nav-list-item__button"
      )[expandedIndex] as HTMLElement;
      if (element) element.focus();
    }
  }

  private onFocusOut(e: FocusEvent) {
    // The "focusout" event might have been triggered by another "focus" event.
    // After the next event loop, if the activeElement is null,
    // we know the nav is no longer focused
    setTimeout(() => {
      if (this.template.activeElement === null) {
        this.expandedNavItem = undefined;
      }
    });
  }

  private onMouseLeave(e: MouseEvent) {
    this.expandedNavItem = undefined;
  }

  private preloadImages() {
    let urls = this.items.flatMap(i =>
      (i.sections || []).flatMap(s => s.items.flatMap(i => i.iconUrl))
    );
    for (let url of urls) {
      if (!url) continue;
      if (preloadedImages.has(url)) continue;
      let image = new Image();
      image.src = url;
      preloadedImages.add(url);
    }
  }

  private setActiveNavItem(target: EventTarget) {
    let text = (target as HTMLElement).textContent;
    this.expandedNavItem = this.items.find(item => item.label === text);
  }
}
