import { buildCustomElementConstructor } from "lwc";

import Footnote from "tm/footnote";

export { Footnote };

customElements.define("tm-footnote", buildCustomElementConstructor(Footnote));
