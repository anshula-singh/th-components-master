import { buildCustomElementConstructor } from "lwc";

import ChildSummary from "tds/childSummary";

export { ChildSummary };

customElements.define(
  "tds-child-summary",
  buildCustomElementConstructor(ChildSummary)
);
