import { api, LightningElement } from "lwc";

import { Menu } from "../../../shared/menu";

import { User } from "./types";

export default class extends LightningElement {
  private menu = new Menu({
    onChange: state => {},
    shadowRoot: this.template
  });

  @api user: User = undefined!;

  private get menuOptions() {
    return this.user.userMenu.navigation.map(option => ({
      ...option,
      key: option.label.replace(/[^a-z0-9]/g, "")
    }));
  }

  private get bannerStyle() {
    return `background-image: url(${this.user.userMenu.bgPath});`;
  }

  private get bannerPhotoStyle() {
    return `background-image: url(${this.user.avatarPath});`;
  }

  renderedCallback() {
    this.menu.renderedCallback();
  }

  disconnectedCallback() {
    this.menu.disconnectedCallback();
  }

  private onProfileClick(e: MouseEvent) {
    this.menu.open();
  }
}
