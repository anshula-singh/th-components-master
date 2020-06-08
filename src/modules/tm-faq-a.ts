import { buildCustomElementConstructor } from "lwc";

import FaqA from "tm/faqA";

export { FaqA };

customElements.define("tm-faq-a", buildCustomElementConstructor(FaqA));
