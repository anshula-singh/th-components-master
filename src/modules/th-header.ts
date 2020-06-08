import { buildCustomElementConstructor } from "lwc";

import Header from "th/header";

export { Header };

customElements.define("th-header", buildCustomElementConstructor(Header));
