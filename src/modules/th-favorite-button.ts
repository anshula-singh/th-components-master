import { buildCustomElementConstructor } from "lwc";

import FavoriteButton from "th/favoriteButton";

export { FavoriteButton };

customElements.define(
  "th-favorite-button",
  buildCustomElementConstructor(FavoriteButton)
);
