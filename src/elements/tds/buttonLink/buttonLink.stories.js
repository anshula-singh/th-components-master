import { html } from "lit-html";

export default {
  title: "tds/tds-button-link",
  parameters: {
    modules: ["/modules/tds-button-link.js"]
  }
};

export const Base = () => html`
  <tds-button-link href="/">Link</tds-button-link>
`;
