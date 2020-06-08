import { html } from "lit-html";

export default {
  title: "tds/tds-progress-bar",
  parameters: {
    modules: ["/modules/tds-progress-bar.js"]
  }
};

export const Base = () => html`
  <tds-progress-bar progress="30"></tds-progress-bar>
`;
