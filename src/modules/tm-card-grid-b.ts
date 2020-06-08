import { buildCustomElementConstructor } from "lwc";

import CardGridB from "tm/cardGridB";

export { CardGridB };

customElements.define(
  "tm-card-grid-b",
  buildCustomElementConstructor(CardGridB)
);
