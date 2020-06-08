import { LightningElement } from "lwc";

let focusVisible = true;
let handlers: (() => void)[] = [];

export default class extends LightningElement {
  private observer!: MutationObserver;

  connectedCallback() {
    this.observer = new MutationObserver(() => {
      this.onChange();
    });
    this.observer.observe(this.template.host, {
      childList: true
    });
    handlers.push(this.onChange);
    this.onChange();
  }

  disconnectedCallback() {
    handlers = handlers.filter(h => h !== this.onChange);
    this.observer.disconnect();
  }

  private onChange = () => {
    for (let node of Array.from(this.template.host.children)) {
      node.setAttribute("data-focus-visible", String(focusVisible));
    }
  };
}

document.addEventListener("mousedown", onMouse, { passive: true });
document.addEventListener("mousemove", onMouse, { passive: true });
document.addEventListener("keydown", onKeyboard, { passive: true });

function onMouse(event: MouseEvent) {
  if (!focusVisible) return;
  else focusVisible = false;
  for (let handler of handlers) handler();
}

function onKeyboard(event: KeyboardEvent) {
  if (focusVisible) return;
  else focusVisible = true;
  for (let handler of handlers) handler();
}
