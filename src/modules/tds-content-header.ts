import { buildCustomElementConstructor } from "lwc";

import ContentHeader from "tds/contentHeader";

export { ContentHeader };

customElements.define(
  "tds-content-header",
  buildCustomElementConstructor(ContentHeader)
);
