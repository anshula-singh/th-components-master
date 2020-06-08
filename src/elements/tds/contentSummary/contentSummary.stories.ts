import { html } from "lit-html";

import {
  modul,
  moduleWithProgress,
  moduleComplete,
  trail,
  trailWithProgress,
  trailComplete,
  trailmix
} from "../../../../__fixtures__/content";

export default {
  title: "tds/tds-content-summary",
  parameters: {
    modules: ["/modules/tds-content-summary.js"],
    chromatic: {
      viewports: [400, 800, 1199]
    }
  }
};

export const Module = () => html`
  <tds-content-summary .summary=${modul}></tds-content-summary>
`;

export const Trail = () => html`
  <tds-content-summary .summary=${trail}></tds-content-summary>
`;

export const ModuleWithProgress = () => html`
  <tds-content-summary .summary=${moduleWithProgress}></tds-content-summary>
`;

export const TrailWithProgress = () => html`
  <tds-content-summary .summary=${trailWithProgress}></tds-content-summary>
`;

export const ModuleComplete = () => html`
  <tds-content-summary .summary=${moduleComplete}></tds-content-summary>
`;

export const TrailComplete = () => html`
  <tds-content-summary .summary=${trailComplete}></tds-content-summary>
`;

export const Trailmix = () => html`
  <tds-content-summary .summary=${trailmix}></tds-content-summary>
`;
