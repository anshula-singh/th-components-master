import { buildCustomElementConstructor } from "lwc";

import Icon from "tds/icon";

export { Icon };

customElements.define("tds-icon", buildCustomElementConstructor(Icon));
