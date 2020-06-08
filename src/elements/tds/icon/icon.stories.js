import { html } from "lit-html";

export default {
  title: "tds/tds-icon",
  parameters: {
    modules: ["/modules/tds-icon.js"]
  }
};

export const Base = () => html`
  <tds-icon size="large" symbol="edit"></tds-icon>
`;

export const Action = () => html`
  <div style="color: red">
    <tds-icon size="large" sprite="action" symbol="check"></tds-icon>
  </div>
`;
