import { buildCustomElementConstructor } from "lwc";

import ContentBrick from "tds/contentBrick";

export { ContentBrick };

customElements.define(
  "tds-content-brick",
  buildCustomElementConstructor(ContentBrick)
);
