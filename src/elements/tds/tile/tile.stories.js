import { html } from "lit-html";

export default {
  title: "tds/tds-tile",
  parameters: {
    modules: ["/modules/tds-tile.js"]
  }
};

import { Base as SummaryBase } from "../summary/summary.stories";

export const Base = () => html`
  <tds-tile color="#bada55">
    ${SummaryBase()}
  </tds-tile>
`;
