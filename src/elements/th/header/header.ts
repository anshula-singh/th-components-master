import { track, LightningElement } from "lwc";

import { apps } from "../headerApps/__fixtures__/index";
import { items as navItems } from "../headerNav/__fixtures__/index";
import { user } from "../headerProfile/__fixtures__/index";

export default class extends LightningElement {
  @track private apps = apps;
  @track private logo: string =
    "https://trailhead.salesforce.com/assets/trailhead-logo-86df2c10154e03fb8b18110597a115ecce58d8bb2887e33a155ae8784cca5784.svg";
  @track private navItems = navItems;
  @track private user = user;
}
