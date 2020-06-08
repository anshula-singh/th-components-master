import { LightningElement } from "lwc";

export default class extends LightningElement {
  private observer!: MutationObserver;
  private didSetContent = false;

  connectedCallback() {
    this.observer = new MutationObserver(() => {
      this.setContent();
    });
    this.observer.observe(this.template.host, {
      childList: true,
      subtree: true
    });
    this.setContent();
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  renderedCallback() {
    if (!this.didSetContent) {
      this.didSetContent = true;
      this.setContent();
    }
  }

  private setContent() {
    let section = this.template.querySelector("section");
    if (section) {
      section.innerHTML = this.template.host.innerHTML;
    }
  }
}
