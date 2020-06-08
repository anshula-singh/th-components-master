import { buildCustomElementConstructor } from "lwc";

import PromoA from "tm/promoA";

export { PromoA };

customElements.define("tm-promo-a", buildCustomElementConstructor(PromoA));
