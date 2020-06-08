import { buildCustomElementConstructor } from "lwc";

import FeatureGridA from "tm/featureGridA";

export { FeatureGridA };

customElements.define(
  "tm-feature-grid-a",
  buildCustomElementConstructor(FeatureGridA)
);
