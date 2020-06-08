import { api, LightningElement, track } from "lwc";
import { waitForPageSettled } from "tm/utils";

export default class extends LightningElement {
  @api videoId: string = undefined!;

  @track private height = 0;
  @track private width = 0;

  private didSetSize = false;

  private get src() {
    return `https://www.youtube.com/embed/${this.videoId}`;
  }

  renderedCallback() {
    if (!this.didSetSize) {
      this.didSetSize = true;
      waitForPageSettled().then(() => {
        let w = this.template.host.offsetWidth;
        let ratio = 0.5625;
        this.height = w * ratio;
        this.width = w;
      });
    }
  }
}
