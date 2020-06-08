import { buildCustomElementConstructor } from "lwc";

import Badge from "tds/badge";

export { Badge };

customElements.define("tds-badge", buildCustomElementConstructor(Badge));
