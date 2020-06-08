import { buildCustomElementConstructor } from "lwc";

import ContentListItem from "tds/contentListItem";

export { ContentListItem };

customElements.define(
  "tds-content-list-item",
  buildCustomElementConstructor(ContentListItem)
);
