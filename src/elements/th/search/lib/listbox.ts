import { produce } from "immer";
import { ShadowRootTheGoodPart } from "lwc";

type Input = {
  onChange: (state: ListboxState) => void;
  onSelect: (index: number) => void;
  onSubmit: () => void;
  shadowRoot: ShadowRootTheGoodPart;
};

export type ListboxState = {
  active: boolean;
  selectedIndex: number;
  setup: boolean;
};

export type Selector = "root" | "input" | "options" | "option";

const SELECTOR_ROOT = "root";
const SELECTOR_INPUT = "input";
const SELECTOR_OPTIONS = "options";
const SELECTOR_OPTION = "option";

export function getSelector(selector: Selector) {
  return `[data-listbox="${selector}"]`;
}

export class Listbox {
  private _count: number = 0;
  private _state: ListboxState = {
    active: false,
    selectedIndex: -1,
    setup: false
  };
  private get state(): ListboxState {
    return this._state;
  }
  private set state(value: ListboxState) {
    this._state = value;
    this.update();
    this.input.onChange(this._state);
  }

  private hover = false;

  constructor(private input: Input) {
    input.onChange(this.state);
  }

  private setState(
    nextState: Partial<ListboxState> | ((state: ListboxState) => void)
  ) {
    this.state = produce(this.state, state => {
      if (typeof nextState === "function") nextState(state);
      else Object.assign(state, nextState);
    });
  }

  renderedCallback() {
    if (!this.state.setup) {
      let $input = this.getElement("input")!;
      let $options = this.getElement(SELECTOR_OPTIONS)!;
      $input.addEventListener("blur", this.onBlur);
      $input.addEventListener("focus", this.onFocus);
      $input.addEventListener("keydown", this.onKeyDown);
      $options.addEventListener("click", this.onClick);
      $options.addEventListener("mouseenter", this.onMouseEnter);
      $options.addEventListener("mouseleave", this.onMouseLeave);
      this.state.setup = true;
    }
    this._count = this.input.shadowRoot.querySelectorAll(
      getSelector(SELECTOR_OPTION)
    ).length;
    this.update();
  }

  disconnectedCallback() {
    let $input = this.getElement(SELECTOR_INPUT)!;
    let $options = this.getElement(SELECTOR_OPTIONS)!;
    $input.removeEventListener("blur", this.onBlur);
    $input.removeEventListener("focus", this.onFocus);
    $input.removeEventListener("keydown", this.onKeyDown);
    $options.removeEventListener("click", this.onClick);
    $options.removeEventListener("mouseenter", this.onMouseEnter);
    $options.removeEventListener("mouseleave", this.onMouseLeave);
  }

  private getElement(selector: Selector) {
    return this.input.shadowRoot.querySelector(getSelector(selector));
  }

  private onClick = (e: MouseEvent) => {
    let selectedIndex = Array.from(
      this.input.shadowRoot.querySelectorAll(getSelector(SELECTOR_OPTION))
    ).findIndex(n => n.contains(e.target as HTMLElement));
    this.setState({ active: false, selectedIndex });
    this.input.onSelect(this.state.selectedIndex);
  };

  private onBlur = (e: FocusEvent) => {
    if (!this.hover) {
      this.setState({ active: false });
    }
  };

  private onFocus = (e: FocusEvent) => {
    this.setState({ active: true, selectedIndex: -1 });
  };

  private onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        this.setState(state => {
          state.selectedIndex--;
          if (state.selectedIndex < 0) state.selectedIndex = this._count - 1;
        });
        break;
      case "ArrowDown":
        this.setState(state => {
          state.selectedIndex++;
          if (state.selectedIndex === this._count) state.selectedIndex = 0;
        });
        break;
      case "Enter":
        this.setState({ active: false });
        if (this.state.selectedIndex > -1) {
          this.input.onSelect(this.state.selectedIndex);
        } else {
          this.input.onSubmit();
        }
        break;
    }
  };

  private onMouseEnter = (e: MouseEvent) => {
    this.hover = true;
  };

  private onMouseLeave = (e: MouseEvent) => {
    this.hover = false;
  };

  private setRootAttributes() {
    let $root = this.getElement(SELECTOR_ROOT)!;
    $root.setAttribute("aria-expanded", String(this.state.active));
    $root.setAttribute("aria-haspopup", "listbox");
    $root.setAttribute("role", "combobox");
  }

  private setInputAttributes() {
    let $activeDecendant = this.input.shadowRoot.querySelectorAll(
      getSelector(SELECTOR_OPTION)
    )[this.state.selectedIndex] as HTMLElement | undefined;
    let $input = this.getElement(SELECTOR_INPUT)!;
    let $options = this.getElement(SELECTOR_OPTIONS)!;
    $input.setAttribute(
      "aria-activedescendant",
      $activeDecendant ? $activeDecendant.getAttribute("id") || "" : ""
    );
    $input.setAttribute("aria-autocomplete", "list");
    $input.setAttribute("aria-controls", $options.getAttribute("id") || "");
    $input.setAttribute("autocomplete", "off");
  }

  private setListboxAttributes() {
    let $options = this.getElement(SELECTOR_OPTIONS)!;
    $options.setAttribute("role", "listbox");
    $options.setAttribute("aria-hidden", String(!this.state.active));
    this.input.shadowRoot.querySelectorAll("ui,li").forEach(node => {
      let element = node as HTMLElement;
      if (element.hasAttribute("role")) return;
      element.setAttribute("role", "presentation");
    });
  }

  private setListboxItemAttributes() {
    this.input.shadowRoot
      .querySelectorAll(getSelector(SELECTOR_OPTION))
      .forEach((node, i) => {
        let element = node as HTMLElement;
        element.setAttribute(
          "aria-selected",
          String(i === this.state.selectedIndex)
        );
        element.setAttribute("role", "option");
      });
  }

  private update() {
    this.setRootAttributes();
    this.setInputAttributes();
    this.setListboxAttributes();
    this.setListboxItemAttributes();
  }
}
