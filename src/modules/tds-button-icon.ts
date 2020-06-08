import { buildCustomElementConstructor } from "lwc";

import ButtonIcon from "tds/buttonIcon";

export { ButtonIcon };

customElements.define(
  "tds-button-icon",
  buildCustomElementConstructor(ButtonIcon)
);
