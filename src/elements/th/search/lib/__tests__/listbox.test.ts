import { Listbox, ListboxState } from "../listbox";

jest.useFakeTimers();

describe("Listbox", () => {
  let $shadow: ShadowRoot;
  let $input: HTMLInputElement;
  let listbox: Listbox;
  let onChange: jest.Mock;
  let onSelect: jest.Mock;
  let onSubmit: jest.Mock;
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  beforeEach(() => {
    onChange = jest.fn();
    onSelect = jest.fn();
    onSubmit = jest.fn();
    let $element = document.createElement("div");
    $shadow = $element.attachShadow({ mode: "open" });
    $shadow.innerHTML = createListboxTemplate(createListboxItems());
    listbox = createListbox($shadow, onChange, onSelect, onSubmit);
    listbox.renderedCallback();
    $input = $shadow.querySelector("input") as HTMLInputElement;
  });
  it("default", async () => {
    expect($shadow.innerHTML).toMatchSnapshot();
  });
  it("focus", async () => {
    let focusEvent = new FocusEvent("focus", {
      bubbles: false,
      cancelable: true
    });
    $input.dispatchEvent(focusEvent);
    expect($shadow.innerHTML).toMatchSnapshot();
  });
  it("submit", async () => {
    let focusEvent = new FocusEvent("focus", {
      bubbles: false,
      cancelable: true
    });
    let keydownEvent = new KeyboardEvent("keydown", {
      bubbles: false,
      cancelable: true,
      key: "Enter"
    });
    $input.dispatchEvent(focusEvent);
    $input.value = "hello";
    $input.dispatchEvent(keydownEvent);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
  it("arrow down", async () => {
    let focusEvent = new FocusEvent("focus", {
      bubbles: false,
      cancelable: true
    });
    let keydownEvent = new KeyboardEvent("keydown", {
      bubbles: false,
      cancelable: true,
      key: "ArrowDown"
    });
    $input.dispatchEvent(focusEvent);
    $input.dispatchEvent(keydownEvent);
    expect($input).toHaveAttribute("aria-activedescendant", "a");
    $input.dispatchEvent(keydownEvent);
    expect($input).toHaveAttribute("aria-activedescendant", "b");
    $input.dispatchEvent(keydownEvent);
    expect($input).toHaveAttribute("aria-activedescendant", "c");
    $input.dispatchEvent(keydownEvent);
    expect($input).toHaveAttribute("aria-activedescendant", "a");
  });
  it("arrow up", async () => {
    let focusEvent = new FocusEvent("focus", {
      bubbles: false,
      cancelable: true
    });
    let keydownEvent = new KeyboardEvent("keydown", {
      bubbles: false,
      cancelable: true,
      key: "ArrowUp"
    });
    $input.dispatchEvent(focusEvent);
    $input.dispatchEvent(keydownEvent);
    expect($input).toHaveAttribute("aria-activedescendant", "c");
    $input.dispatchEvent(keydownEvent);
    expect($input).toHaveAttribute("aria-activedescendant", "b");
  });
  it("enter", async () => {
    let focusEvent = new FocusEvent("focus", {
      bubbles: false,
      cancelable: true
    });
    let keydownEvent = (key: string) =>
      new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key
      });
    $input.dispatchEvent(focusEvent);
    $input.dispatchEvent(keydownEvent("ArrowDown"));
    $input.dispatchEvent(keydownEvent("ArrowDown"));
    $input.dispatchEvent(keydownEvent("Enter"));
    expect(onSelect).toHaveBeenCalledWith(1);
  });
  it("blur", async () => {
    let focusEvent = new FocusEvent("blur", {
      bubbles: false,
      cancelable: true
    });
    $input.dispatchEvent(focusEvent);
    expect($shadow.innerHTML).toMatchSnapshot();
  });
  it("click", async () => {
    let focusEvent = new FocusEvent("blur", {
      bubbles: false,
      cancelable: true
    });
    let mouseEnterEvent = new MouseEvent("mouseenter", {
      bubbles: false,
      cancelable: true
    });
    let clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    });
    $input.dispatchEvent(focusEvent);
    $shadow
      .querySelector('[data-listbox="options"]')!
      .dispatchEvent(mouseEnterEvent);
    $shadow
      .querySelectorAll('[data-listbox="option"]')[1]
      .dispatchEvent(clickEvent);
    expect(onSelect).toHaveBeenCalledWith(1);
  });
});

const createListboxTemplate = (items: { key: string; value: string }[]) => `
  <div data-listbox="root">
    <div>
      <input data-listbox="input" />
    </div>
    <div data-listbox="options">
      <ul>
        ${items.map(
          item => `
          <li>
            <div data-listbox="option" id="${item.key}">
              ${item.value}
            </div>
          </li>
        `
        )}
      </ul>
    </div>
  </div>
`;

const createListboxItems = () => [
  { key: "a", value: "A" },
  { key: "b", value: "B" },
  { key: "c", value: "C" }
];

const createListbox = (
  shadowRoot: ShadowRoot,
  onChange: (state: ListboxState) => void,
  onSelect: (index: number) => void,
  onSubmit: () => void
) =>
  new Listbox({
    onChange,
    onSelect,
    onSubmit,
    // @ts-ignore
    shadowRoot: shadowRoot
  });
