import { buildCustomElementConstructor } from "lwc";

import ContentProgress from "tds/contentProgress";

export { ContentProgress };

customElements.define(
  "tds-content-progress",
  buildCustomElementConstructor(ContentProgress)
);
