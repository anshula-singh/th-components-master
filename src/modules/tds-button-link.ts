import { buildCustomElementConstructor } from "lwc";

import ButtonLink from "tds/buttonLink";

export { ButtonLink };

customElements.define(
  "tds-button-link",
  buildCustomElementConstructor(ButtonLink)
);
