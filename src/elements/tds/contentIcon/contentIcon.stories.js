import { html } from "lit-html";

export default {
  title: "tds/tds-content-icon",
  parameters: {
    modules: ["/modules/tds-content-icon.js"]
  }
};

export const Base = () => html`
  <tds-content-icon src="/images/badge-1.png"></tds-content-icon>
`;

export const BaseChecked = () => html`
  <tds-content-icon
    .checked=${true}
    src="/images/badge-1.png"
  ></tds-content-icon>
`;

export const BaseSmall = () => html`
  <tds-content-icon size="small" src="/images/badge-1.png"></tds-content-icon>
`;

export const BaseSmallChecked = () => html`
  <tds-content-icon
    .checked=${true}
    size="small"
    src="/images/badge-1.png"
  ></tds-content-icon>
`;

export const BaseLarge = () => html`
  <tds-content-icon size="large" src="/images/badge-1.png"></tds-content-icon>
`;

export const BaseLargeChecked = () => html`
  <tds-content-icon
    .checked=${true}
    size="large"
    src="/images/badge-1.png"
  ></tds-content-icon>
`;

export const BaseXLarge = () => html`
  <tds-content-icon size="xlarge" src="/images/badge-1.png"></tds-content-icon>
`;

export const BaseXLargeChecked = () => html`
  <tds-content-icon
    .checked=${true}
    size="xlarge"
    src="/images/badge-1.png"
  ></tds-content-icon>
`;

export const Trail = () => html`
  <tds-content-icon
    .background=${true}
    color="rgb(221, 49, 49)"
    src="/images/badge-trail-1.png"
  ></tds-content-icon>
`;

export const TrailChecked = () => html`
  <tds-content-icon
    .background=${true}
    color="rgb(221, 49, 49)"
    .checked=${true}
    src="/images/badge-trail-1.png"
  ></tds-content-icon>
`;

export const TrailSmall = () => html`
  <tds-content-icon
    .background=${true}
    color="rgb(221, 49, 49)"
    size="small"
    src="/images/badge-trail-1.png"
  ></tds-content-icon>
`;

export const TrailLarge = () => html`
  <tds-content-icon
    .background=${true}
    color="rgb(221, 49, 49)"
    size="large"
    src="/images/badge-trail-1.png"
  ></tds-content-icon>
`;
