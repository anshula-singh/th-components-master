import { api, track, LightningElement } from "lwc";

import { isFocusable, isHidden } from "@a11y/focus-trap/focusable";
import { queryShadowRoot } from "@a11y/focus-trap/shadow";

import { debounce } from "../../../shared/debounce";

// This is a re-implementation of https://github.com/andreasbm/focus-trap
// since LWC does not currently support custom elements in a template
export default class extends LightningElement {
  @api private inactive = false;
  @track private focused = false;
  private init = false;

  private $start!: HTMLElement;
  private $end!: HTMLElement;

  private $activeElement: Element | null = null;

  private get startTabIndex() {
    return !this.focused || this.inactive ? "-1" : "0";
  }

  private get endTabIndex() {
    return !this.focused || this.inactive ? "-1" : "0";
  }

  renderedCallback() {
    if (this.init) return;
    else this.init = true;

    this.$start = this.template.querySelector(
      `[data-id="start"]`
    ) as HTMLElement;
    this.$end = this.template.querySelector(`[data-id="end"]`) as HTMLElement;

    this.$start.addEventListener("focus", this.focusLastElement);
    this.$end.addEventListener("focus", this.focusFirstElement);

    this.addEventListener("focusin", this.onFocusIn);
    this.addEventListener("focusout", this.onFocusOut);
    this.addEventListener("keyup", this.onKeyUp as EventListener);

    this.$activeElement = getActiveElement(document.activeElement);

    this.focusFirstElement();
  }

  disconnectedCallback() {
    this.removeEventListener("focusin", this.onFocusIn);
    this.removeEventListener("focusout", this.onFocusOut);
    if (this.$activeElement && this.$activeElement instanceof HTMLElement)
      this.$activeElement.focus();
  }

  private focusFirstElement = () => {
    this.trapFocus();
  };

  private focusLastElement = () => {
    this.trapFocus(true);
  };

  private onFocusIn = debounce(() => {
    this.focused = true;
  }, 0);

  private onFocusOut = debounce(() => {
    this.focused = false;
  }, 0);

  private onKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Esc" || e.key === "Escape") {
      this.dispatchEvent(new CustomEvent("requestclose"));
    }
  };

  private getFocusableElements(): HTMLElement[] {
    // @ts-ignore
    let children = this.template.querySelector("slot").assignedElements();
    // @ts-ignore
    return queryShadowRoot({ children }, isHidden, isFocusable);
  }

  private trapFocus(trapToEnd?: boolean) {
    if (this.inactive) return;
    let focusableElements = this.getFocusableElements();
    if (focusableElements.length > 0) {
      if (trapToEnd) {
        focusableElements[focusableElements.length - 1].focus();
      } else {
        focusableElements[0].focus();
      }
    }
  }
}

function getActiveElement(element: Element | null): Element | null {
  if (element && element.shadowRoot)
    return getActiveElement(element.shadowRoot.activeElement);
  return element;
}
