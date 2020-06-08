import { produce } from "immer";
import { ShadowRootTheGoodPart } from "lwc";

type Input = {
  onChange: (state: MenuState) => void;
  shadowRoot: ShadowRootTheGoodPart;
};

export type MenuState = {
  count: number;
  open: boolean;
  selectedIndex: number;
  setup: boolean;
};

export type Selector = "trigger" | "menu" | "item";

const SELECTOR_TRIGGER = "trigger";
const SELECTOR_MENU = "menu";
const SELECTOR_ITEM = "item";

export function getSelector(selector: Selector) {
  return `[data-menu="${selector}"]`;
}

export class Menu {
  private _state: MenuState = {
    count: 0,
    open: false,
    selectedIndex: -1,
    setup: false
  };
  private get state(): MenuState {
    return this._state;
  }
  private set state(value: MenuState) {
    this._state = value;
    this.update();
    this.input.onChange(this._state);
  }

  constructor(private input: Input) {
    input.onChange(this.state);
  }

  private setState(
    nextState: Partial<MenuState> | ((state: MenuState) => void)
  ) {
    this.state = produce(this.state, state => {
      if (typeof nextState === "function") nextState(state);
      else Object.assign(state, nextState);
    });
  }

  renderedCallback() {
    if (!this.state.setup) {
      let $trigger = this.getElement(SELECTOR_TRIGGER)!;
      let $menu = this.getElement(SELECTOR_MENU)!;
      $trigger.addEventListener("click", this.onTriggerClick);
      $trigger.addEventListener("keydown", this.onTriggerKeyDown);
      $menu.addEventListener("blur", this.onMenuBlur);
      $menu.addEventListener("click", this.onMenuClick);
      $menu.addEventListener("keydown", this.onMenuKeyDown);
      this.state.setup = true;
    }
    this.state.count = this.input.shadowRoot.querySelectorAll(
      getSelector(SELECTOR_ITEM)
    ).length;
    this.update();
  }

  disconnectedCallback() {
    let $trigger = this.getElement(SELECTOR_TRIGGER)!;
    let $menu = this.getElement(SELECTOR_MENU)!;
    $trigger.removeEventListener("click", this.onTriggerClick);
    $trigger.removeEventListener("keydown", this.onTriggerKeyDown);
    $menu.removeEventListener("blur", this.onMenuBlur);
    $menu.removeEventListener("click", this.onMenuClick);
    $menu.removeEventListener("keydown", this.onMenuKeyDown);
  }

  open() {
    this.setState({
      open: true,
      selectedIndex: 0
    });
    this.getElement(SELECTOR_MENU)!.focus();
  }

  close() {
    this.setState({ open: false });
  }

  private getElement(selector: Selector) {
    return this.input.shadowRoot.querySelector(getSelector(selector));
  }

  private onTriggerClick = (e: MouseEvent) => {
    this.open();
  };

  private onTriggerKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
      case "Space":
      case "ArrowDown":
        this.open();
        break;
    }
  };

  private onMenuClick = (e: MouseEvent) => {};

  private onMenuBlur = (e: FocusEvent) => {
    setTimeout(() => {
      let $active = this.input.shadowRoot.activeElement;
      let $menu = this.getElement(SELECTOR_MENU)!;
      if ($menu === $active || $menu.contains($active)) return;
      this.setState({ open: false });
    });
  };

  private onMenuKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        this.setState(state => {
          state.selectedIndex--;
          if (state.selectedIndex < 0) state.selectedIndex = state.count - 1;
        });
        break;
      case "ArrowDown":
        this.setState(state => {
          state.selectedIndex++;
          if (state.selectedIndex === state.count) state.selectedIndex = 0;
        });
        break;
      case "Enter":
        if (!this.state.open) break;
        this.close();
        this.select();
        break;
      case "Escape":
      case "Esc": {
        this.close();
        this.getElement(SELECTOR_TRIGGER)!.focus();
        break;
      }
    }
  };

  private select() {
    let element = this.input.shadowRoot.querySelectorAll(
      getSelector(SELECTOR_ITEM)
    )[this.state.selectedIndex] as HTMLElement | undefined;
    if (element) element.click();
  }

  private setTriggerAttributes() {
    let $trigger = this.getElement(SELECTOR_TRIGGER)!;
    let $menu = this.getElement(SELECTOR_MENU)!;
    $trigger.setAttribute("aria-controls", $menu.getAttribute("id") || "");
    $trigger.setAttribute("aria-expanded", String(this.state.open));
    $trigger.setAttribute("aria-haspopup", "true");
    $trigger.setAttribute("role", "button");
  }

  private setMenuAttributes() {
    let $menu = this.getElement(SELECTOR_MENU)!;
    let $activeDecendant = this.input.shadowRoot.querySelectorAll(
      getSelector(SELECTOR_ITEM)
    )[this.state.selectedIndex] as HTMLElement | undefined;
    $menu.setAttribute(
      "aria-activedescendant",
      $activeDecendant ? $activeDecendant.getAttribute("id") || "" : ""
    );
    $menu.setAttribute("aria-hidden", String(!this.state.open));
    $menu.style.zIndex = this.state.open ? "100" : "";
    $menu.style.display = this.state.open ? "block" : "none";
    if (this.state.open) {
      $menu.setAttribute("tabindex", "0");
    } else {
      $menu.removeAttribute("tabindex");
    }
    this.input.shadowRoot.querySelectorAll("ui,li").forEach(node => {
      let element = node as HTMLElement;
      element.setAttribute("role", "presentation");
    });
    this.input.shadowRoot
      .querySelectorAll(getSelector(SELECTOR_ITEM))
      .forEach(node => {
        let element = node as HTMLElement;
        element.setAttribute("tabindex", "-1");
      });
  }

  private setMenuItemsAttributes() {
    this.input.shadowRoot
      .querySelectorAll(getSelector(SELECTOR_ITEM))
      .forEach((node, i) => {
        let element = node as HTMLElement;
        element.setAttribute(
          "data-active",
          String(i === this.state.selectedIndex)
        );
        element.setAttribute("role", "menuitem");
      });
  }

  private update() {
    this.setTriggerAttributes();
    this.setMenuAttributes();
    this.setMenuItemsAttributes();
  }
}
