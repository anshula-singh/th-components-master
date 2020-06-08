import { buildCustomElementConstructor } from "lwc";

import ContentBrickCompact from "tds/contentBrickCompact";

export { ContentBrickCompact };

customElements.define(
  "tds-content-brick-compact",
  buildCustomElementConstructor(ContentBrickCompact)
);
