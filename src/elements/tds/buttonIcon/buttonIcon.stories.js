import { html } from "lit-html";

export default {
  title: "tds/tds-button-icon",
  parameters: {
    modules: ["/modules/tds-button-icon.js", "/modules/tds-icon.js"]
  }
};

export const Base = () => html`
  <tds-button-icon aria-label="edit">
    <tds-icon symbol="edit"></tds-icon>
  </tds-button-icon>
`;

export const Disabled = () => html`
  <tds-button-icon aria-label="edit" disabled="true">
    <tds-icon symbol="edit"></tds-icon>
  </tds-button-icon>
`;

export const Bare = () => html`
  <tds-button-icon aria-label="edit" variant="bare">
    <tds-icon symbol="edit"></tds-icon>
  </tds-button-icon>
`;
