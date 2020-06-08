import { buildCustomElementConstructor } from "lwc";

import PageHeaderA from "tm/pageHeaderA";

export { PageHeaderA };

customElements.define(
  "tm-page-header-a",
  buildCustomElementConstructor(PageHeaderA)
);
