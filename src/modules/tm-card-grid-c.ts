import { buildCustomElementConstructor } from "lwc";

import CardGridC from "tm/cardGridC";

export { CardGridC };

customElements.define(
  "tm-card-grid-c",
  buildCustomElementConstructor(CardGridC)
);
