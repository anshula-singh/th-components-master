import { buildCustomElementConstructor } from "lwc";

import Tile from "tds/tile";

export { Tile };

customElements.define("tds-tile", buildCustomElementConstructor(Tile));
