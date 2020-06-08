import { buildCustomElementConstructor } from "lwc";

import ContentIcon from "tds/contentIcon";

export { ContentIcon };

customElements.define(
  "tds-content-icon",
  buildCustomElementConstructor(ContentIcon)
);
