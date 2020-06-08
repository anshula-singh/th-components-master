import { buildCustomElementConstructor } from "lwc";

import CardGridD from "tm/cardGridD";

export { CardGridD };

customElements.define(
  "tm-card-grid-d",
  buildCustomElementConstructor(CardGridD)
);
