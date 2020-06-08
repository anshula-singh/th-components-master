import { html, render, TemplateResult } from "lit-html";

export { html };

export function nextTick() {
  return new Promise(resolve => {
    process.nextTick(resolve);
  });
}

export function $(selector: string, element: HTMLElement) {
  return element.shadowRoot!.querySelectorAll(selector);
}

export function $testid(value: string, element: HTMLElement) {
  return $(`[data-testid="${value}"]`, element);
}

export function renderIntoBody(template: TemplateResult) {
  let element = document.createElement("div");
  document.body.append(element);
  render(template, element);
  return element.children[0] as HTMLElement;
}
