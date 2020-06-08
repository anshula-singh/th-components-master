import { buildCustomElementConstructor } from "lwc";

import Content from "tm/content";

export { Content };

customElements.define("tm-content", buildCustomElementConstructor(Content));
