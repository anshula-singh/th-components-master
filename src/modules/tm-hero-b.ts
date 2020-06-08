import { buildCustomElementConstructor } from "lwc";

import HeroB from "tm/heroB";

export { HeroB };

customElements.define("tm-hero-b", buildCustomElementConstructor(HeroB));
