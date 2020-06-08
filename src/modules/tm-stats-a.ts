import { buildCustomElementConstructor } from "lwc";

import StatsA from "tm/statsA";

export { StatsA };

customElements.define("tm-stats-a", buildCustomElementConstructor(StatsA));
