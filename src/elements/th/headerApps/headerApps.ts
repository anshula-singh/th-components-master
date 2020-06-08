import { api, LightningElement, track } from "lwc";

import { Menu } from "../../../shared/menu";

import { App } from "./types";

type MenuOption = App & {
  key: string;
};

export default class extends LightningElement {
  private menu = new Menu({
    onChange: state => {},
    shadowRoot: this.template
  });

  @api apps: App[] = [];

  private get menuOptions(): MenuOption[] {
    return this.apps.map(app => ({
      ...app,
      key: app.label.replace(/[^a-z0-9]/g, "")
    }));
  }

  renderedCallback() {
    this.menu.renderedCallback();
  }

  disconnectedCallback() {
    this.menu.disconnectedCallback();
  }
}
