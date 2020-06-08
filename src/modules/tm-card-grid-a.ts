import { buildCustomElementConstructor } from "lwc";

import CardGridA from "tm/cardGridA";

export { CardGridA };

customElements.define(
  "tm-card-grid-a",
  buildCustomElementConstructor(CardGridA)
);
