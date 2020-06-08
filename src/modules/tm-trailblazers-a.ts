import { buildCustomElementConstructor } from "lwc";

import TrailblazersA from "tm/trailblazersA";

export { TrailblazersA };

customElements.define(
  "tm-trailblazers-a",
  buildCustomElementConstructor(TrailblazersA)
);
