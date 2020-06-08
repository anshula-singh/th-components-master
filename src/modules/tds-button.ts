import { buildCustomElementConstructor } from "lwc";

import Button from "tds/button";

export { Button };

customElements.define("tds-button", buildCustomElementConstructor(Button));
