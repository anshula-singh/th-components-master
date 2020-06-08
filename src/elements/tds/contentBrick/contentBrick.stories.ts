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
  title: "tds/tds-content-brick",
  parameters: {
    modules: ["/modules/tds-content-brick.js"],
    chromatic: {
      viewports: [400, 800, 1199]
    }
  }
};

export const Module = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-brick .summary=${modul}></tds-content-brick>
  </div>
`;

export const Trail = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-brick .summary=${trail}></tds-content-brick>
  </div>
`;

export const ModuleWithProgress = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-brick .summary=${moduleWithProgress}></tds-content-brick>
  </div>
`;

export const TrailWithProgress = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-brick .summary=${trailWithProgress}></tds-content-brick>
  </div>
`;

export const ModuleComplete = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-brick .summary=${moduleComplete}></tds-content-brick>
  </div>
`;

export const TrailComplete = () => html`
  <div style="background: #e0e0e0; padding: 20px;">
    <tds-content-brick .summary=${trailComplete}></tds-content-brick>
  </div>
`;
