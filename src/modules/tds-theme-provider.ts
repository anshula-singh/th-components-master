import { buildCustomElementConstructor } from "lwc";

import ThemeProvider from "tds/themeProvider";

export { ThemeProvider };

customElements.define(
  "tds-theme-provider",
  buildCustomElementConstructor(ThemeProvider)
);
