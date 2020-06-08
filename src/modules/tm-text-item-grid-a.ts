import { buildCustomElementConstructor } from "lwc";

import TextItemGridA from "tm/textItemGridA";

export { TextItemGridA };

customElements.define(
  "tm-text-item-grid-a",
  buildCustomElementConstructor(TextItemGridA)
);
