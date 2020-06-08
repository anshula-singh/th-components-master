import { buildCustomElementConstructor } from "lwc";

import ContentChildListItem from "tds/contentChildListItem";

export { ContentChildListItem };

customElements.define(
  "tds-content-child-list-item",
  buildCustomElementConstructor(ContentChildListItem)
);
