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
  title: "tds/tds-content-list-item",
  parameters: {
    modules: ["/modules/tds-content-list-item.js"]
  }
};

export const Module = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-list-item .summary=${modul}></tds-content-list-item>
  </div>
`;

export const Trail = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-list-item .summary=${trail}></tds-content-list-item>
  </div>
`;

export const ModuleWithProgress = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-list-item
      .summary=${moduleWithProgress}
    ></tds-content-list-item>
  </div>
`;

export const TrailWithProgress = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-list-item
      .summary=${trailWithProgress}
    ></tds-content-list-item>
  </div>
`;

export const ModuleComplete = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-list-item .summary=${moduleComplete}></tds-content-list-item>
  </div>
`;

export const TrailComplete = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-list-item .summary=${trailComplete}></tds-content-list-item>
  </div>
`;
