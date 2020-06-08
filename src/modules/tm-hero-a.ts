import { buildCustomElementConstructor } from "lwc";

import HeroA from "tm/heroA";

export { HeroA };

customElements.define("tm-hero-a", buildCustomElementConstructor(HeroA));
