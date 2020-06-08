import { buildCustomElementConstructor } from "lwc";

import SectionA from "tm/sectionA";

export { SectionA };

customElements.define("tm-section-a", buildCustomElementConstructor(SectionA));
