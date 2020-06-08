import { Menu } from "../menu";

jest.useFakeTimers();

describe("Menu", () => {
  let $shadow: ShadowRoot;
  let $trigger: HTMLElement;
  let $menu: HTMLElement;
  let menu: Menu;
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  beforeEach(() => {
    let $element = document.createElement("div");
    $shadow = $element.attachShadow({ mode: "open" });
    $shadow.innerHTML = createMenuTemplate(createMenuItems());
    menu = createMenu($shadow);
    menu.renderedCallback();
    $trigger = $shadow.querySelector(`[data-menu="trigger"]`) as HTMLElement;
    $menu = $shadow.querySelector(`[data-menu="menu"]`) as HTMLElement;
  });
  it("default", async () => {
    expect($shadow.innerHTML).toMatchSnapshot();
  });
  describe("trigger", () => {
    it("click", async () => {
      let event = new MouseEvent("click", {
        bubbles: false,
        cancelable: true
      });
      $trigger.dispatchEvent(event);
      expect($shadow.innerHTML).toMatchSnapshot();
    });
    it("enter", async () => {
      let event = new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: "Enter"
      });
      $trigger.dispatchEvent(event);
      expect($shadow.innerHTML).toMatchSnapshot();
    });
    it("space", async () => {
      let event = new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: "Space"
      });
      $trigger.dispatchEvent(event);
      expect($trigger).toHaveAttribute("aria-expanded", "true");
    });
    it("arrow down", async () => {
      let event = new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: "ArrowDown"
      });
      $trigger.dispatchEvent(event);
      expect($trigger).toHaveAttribute("aria-expanded", "true");
    });
  });
  describe("menu", () => {
    it("blur (no active child)", () => {
      let clickEvent = new MouseEvent("click", {
        bubbles: false,
        cancelable: true
      });
      let blurEvent = new FocusEvent("blur", {
        bubbles: false,
        cancelable: true
      });
      expect($trigger).toHaveAttribute("aria-expanded", "false");
      $trigger.dispatchEvent(clickEvent);
      expect($trigger).toHaveAttribute("aria-expanded", "true");
      $menu.dispatchEvent(blurEvent);
      Object.defineProperty($shadow, "activeElement", { get: () => null });
      jest.runAllTimers();
      expect($trigger).toHaveAttribute("aria-expanded", "false");
    });
    it("blur (active chilld)", () => {
      let clickEvent = new MouseEvent("click", {
        bubbles: false,
        cancelable: true
      });
      let blurEvent = new FocusEvent("blur", {
        bubbles: false,
        cancelable: true
      });
      expect($trigger).toHaveAttribute("aria-expanded", "false");
      $trigger.dispatchEvent(clickEvent);
      expect($trigger).toHaveAttribute("aria-expanded", "true");
      $menu.dispatchEvent(blurEvent);
      Object.defineProperty($shadow, "activeElement", {
        get: () => $shadow.querySelector("li")
      });
      jest.runAllTimers();
      expect($trigger).toHaveAttribute("aria-expanded", "true");
    });
    it("escape", () => {
      let clickEvent = new MouseEvent("click", {
        bubbles: false,
        cancelable: true
      });
      let keydownEvent = new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: "Escape"
      });
      expect($trigger).toHaveAttribute("aria-expanded", "false");
      $trigger.dispatchEvent(clickEvent);
      expect($trigger).toHaveAttribute("aria-expanded", "true");
      $menu.dispatchEvent(keydownEvent);
      expect($trigger).toHaveAttribute("aria-expanded", "false");
    });
    it("arrow down", () => {
      let clickEvent = new MouseEvent("click", {
        bubbles: false,
        cancelable: true
      });
      let keydownEvent = new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: "ArrowDown"
      });
      $trigger.dispatchEvent(clickEvent);
      $menu.dispatchEvent(keydownEvent);
      expect($menu).toHaveAttribute("aria-activedescendant", "b");
      $menu.dispatchEvent(keydownEvent);
      expect($menu).toHaveAttribute("aria-activedescendant", "c");
    });
    it("arrow up", () => {
      let clickEvent = new MouseEvent("click", {
        bubbles: false,
        cancelable: true
      });
      let keydownEvent = new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: "ArrowUp"
      });
      $trigger.dispatchEvent(clickEvent);
      $menu.dispatchEvent(keydownEvent);
      expect($menu).toHaveAttribute("aria-activedescendant", "c");
      $menu.dispatchEvent(keydownEvent);
      expect($menu).toHaveAttribute("aria-activedescendant", "b");
    });
    it("enter", () => {
      let clickEvent = new MouseEvent("click", {
        bubbles: false,
        cancelable: true
      });
      let keydownEvent = new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: "Enter"
      });
      let onClick = jest.fn();
      $menu.querySelector("a")!.addEventListener("click", onClick);
      $trigger.dispatchEvent(clickEvent);
      $menu.dispatchEvent(keydownEvent);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});

const createMenuTemplate = (
  items: { href: string; key: string; label: string }[]
) => `
  <button data-menu="trigger">
    Profile
  </button>
  <div data-menu="menu" id="menu">
    <ul>
      ${items.map(
        item => `
        <li>
          <a data-menu="item" href="${item.href}" id="${item.key}">
            ${item.label}
          </a>
        </li>
      `
      )}
    </ul>
  </div>
`;

const createMenuItems = () => [
  { href: "/a", key: "a", label: "A" },
  { href: "/b", key: "b", label: "B" },
  { href: "/c", key: "c", label: "C" }
];

const createMenu = (shadowRoot: ShadowRoot) =>
  new Menu({
    onChange: state => {},
    // @ts-ignore
    shadowRoot: shadowRoot
  });
