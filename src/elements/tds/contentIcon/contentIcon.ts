import { api, LightningElement } from "lwc";

export default class extends LightningElement {
  @api background: boolean = false;
  @api checked: boolean = false;
  @api color: string | null = null;
  @api size: "small" | "medium" | "large" | "xlarge" = "medium";
  @api src: string | null = null;

  private get imageSize() {
    switch (this.size) {
      case "small":
        return 60;
      case "medium":
        return 72;
      case "large":
        return 90;
      case "xlarge":
        return 120;
    }
  }

  private get imageContainerStyles() {
    let styles = `height: ${this.imageSize}px; width: ${this.imageSize}px;`;
    if (this.background) {
      return [styles, `background-color: ${this.color};`].join(" ");
    }
    return styles;
  }

  private get iconClassName() {
    return `icon icon--${this.size}`;
  }
}
