import { buildCustomElementConstructor } from "lwc";

import FooterGlobal from "th/footerGlobal";

export { FooterGlobal };

customElements.define(
  "th-footer-global",
  buildCustomElementConstructor(FooterGlobal)
);
