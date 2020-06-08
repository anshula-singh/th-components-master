import { html } from "lit-html";

export default {
  title: "tds/tds-badge",
  parameters: {
    modules: ["/modules/tds-badge.js"]
  }
};

export const Base = () => html`
  <tds-badge>+300 Points</tds-badge>
`;
