import { buildCustomElementConstructor } from "lwc";

import Summary from "tds/summary";

export { Summary };

customElements.define("tds-summary", buildCustomElementConstructor(Summary));
