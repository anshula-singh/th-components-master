import { buildCustomElementConstructor } from "lwc";

import ContentTile from "tds/contentTile";

export { ContentTile };

customElements.define(
  "tds-content-tile",
  buildCustomElementConstructor(ContentTile)
);
