import { html } from "lit-html";

import {
  modul,
  moduleWithProgress,
  moduleComplete,
  trail,
  trailWithProgress,
  trailComplete
} from "../../../../__fixtures__/content";

export default {
  title: "tds/tds-content-tile",
  parameters: {
    modules: ["/modules/tds-content-tile.js"]
  }
};

export const Module = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-tile .summary=${modul}></tds-content-tile>
  </div>
`;

export const Trail = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-tile .summary=${trail}></tds-content-tile>
  </div>
`;

export const ModuleWithProgress = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-tile .summary=${moduleWithProgress}></tds-content-tile>
  </div>
`;

export const TrailWithProgress = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-tile .summary=${trailWithProgress}></tds-content-tile>
  </div>
`;

export const ModuleComplete = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-tile .summary=${moduleComplete}></tds-content-tile>
  </div>
`;

export const TrailComplete = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-tile .summary=${trailComplete}></tds-content-tile>
  </div>
`;
