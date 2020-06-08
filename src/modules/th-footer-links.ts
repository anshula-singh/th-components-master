import { buildCustomElementConstructor } from "lwc";

import FooterLinks from "th/footerLinks";

export { FooterLinks };

customElements.define(
  "th-footer-links",
  buildCustomElementConstructor(FooterLinks)
);
