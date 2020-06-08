import { buildCustomElementConstructor } from "lwc";

import Recommendations from "th/recommendations";

export { Recommendations };

customElements.define(
  "th-recommendations",
  buildCustomElementConstructor(Recommendations)
);
