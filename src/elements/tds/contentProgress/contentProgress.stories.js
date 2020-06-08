import { html } from "lit-html";

export default {
  title: "tds/tds-content-progress",
  parameters: {
    modules: ["/modules/tds-content-progress.js"]
  }
};

export const Base = () => html`
  <tds-content-progress>~30 mins</tds-content-progress>
`;

export const Progress = () => html`
  <tds-content-progress
    estimated-time-left="20"
    progress="88"
    lang="en"
  ></tds-content-progress>
`;

export const Complete = () => html`
  <tds-content-progress
    estimated-time-left="20"
    finished-at="2020-04-20T15:08:45.000Z"
    progress="88"
    lang="es-MX"
  ></tds-content-progress>
`;
