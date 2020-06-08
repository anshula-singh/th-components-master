import { buildCustomElementConstructor } from "lwc";

import PageNavigationA from "tm/pageNavigationA";

export { PageNavigationA };

customElements.define(
  "tm-page-navigation-a",
  buildCustomElementConstructor(PageNavigationA)
);
