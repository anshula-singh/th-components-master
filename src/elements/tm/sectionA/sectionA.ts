import { api, LightningElement } from "lwc";
import { waitForPageSettled } from "tm/utils";

export default class extends LightningElement {
  @api background: "white" | "light" | "dark" = "white";
  @api description: string | null = null;
  @api title: string = "";
  @api ctaHref: string | null = null;
  @api ctaTitle: string | null = null;
  @api ctaTarget: string | null = null;

  connectedCallback() {
    let hash = window.location.hash.slice(1);
    if (this.id && this.id === hash) {
      // We have to restore the natural browser behavior of
      // jumping to anchors because when DOMContentLoaded fires
      // the page won't be fully rendered yet
      waitForPageSettled().then(() => {
        this.template.host.scrollIntoView();
      });
    }
  }

  private get sectionClassName() {
    return `section section--${this.background}`;
  }
}
