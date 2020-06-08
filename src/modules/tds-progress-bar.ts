import { buildCustomElementConstructor } from "lwc";

import ProgressBar from "tds/progressBar";

export { ProgressBar };

customElements.define(
  "tds-progress-bar",
  buildCustomElementConstructor(ProgressBar)
);
