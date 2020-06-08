import { buildCustomElementConstructor } from "lwc";

import Youtube from "tm/youtube";

export { Youtube };

customElements.define("tm-youtube", buildCustomElementConstructor(Youtube));
