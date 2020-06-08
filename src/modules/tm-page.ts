import { buildCustomElementConstructor } from "lwc";

import Page from "tm/page";

export { Page };

customElements.define("tm-page", buildCustomElementConstructor(Page));
