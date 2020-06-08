import { html } from "lit-html";

export default {
  title: "tds/tds-button",
  parameters: {
    modules: ["/modules/tds-button.js"]
  }
};

export const Neutral = () => html`
  <tds-button>Hello</tds-button>
`;

export const Brand = () => html`
  <tds-button variant="brand">Hello</tds-button>
`;

export const Success = () => html`
  <tds-button variant="success">Hello</tds-button>
`;

export const Destructive = () => html`
  <tds-button variant="destructive">Hello</tds-button>
`;

export const Disabled = () => html`
  <tds-button disabled variant="destructive">Hello</tds-button>
`;
