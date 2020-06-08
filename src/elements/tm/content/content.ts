import { api, LightningElement, track } from "lwc";

export default class extends LightningElement {
  private observer!: MutationObserver;
  private didSetContent = false;

  @api navHide: string | null = null;

  @track private headings: {
    href: string;
    id: string;
    label: string;
  }[] = [];
  private get showHeadingsNav() {
    return this.navHide === null && this.headings.length > 0;
  }

  private get rootClassName() {
    return "root";
  }

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
      if (window.location.hash) this.scrollToHash(window.location.hash);
    }
  }

  private onHeadingClick(e: MouseEvent) {
    let anchor = e.currentTarget as HTMLAnchorElement;
    this.scrollToHash(anchor.hash);
  }

  private scrollToHash(hash: string) {
    let heading = this.template.querySelector(hash);
    if (heading) {
      heading.scrollIntoView();
    }
  }

  private setContent() {
    let main = this.template.querySelector("main");
    if (main) {
      main.innerHTML = this.template.host.innerHTML;
      this.headings = Array.from(main.querySelectorAll("h2")).map(n => {
        let label = n.innerText.trim();
        let id = label.replace(/[^a-zA-Z0-9]/g, "_");
        let href = `#${id}`;
        // Side effects in map ftw
        n.id = id;
        return { href, id, label };
      });
    }
  }
}
