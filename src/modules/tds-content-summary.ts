import { buildCustomElementConstructor } from "lwc";

import ContentSummary from "tds/contentSummary";

export { ContentSummary };

customElements.define(
  "tds-content-summary",
  buildCustomElementConstructor(ContentSummary)
);
