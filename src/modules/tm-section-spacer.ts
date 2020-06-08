import { buildCustomElementConstructor } from "lwc";

import SectionSpacer from "tm/sectionSpacer";

export { SectionSpacer };

customElements.define(
  "tm-section-spacer",
  buildCustomElementConstructor(SectionSpacer)
);
