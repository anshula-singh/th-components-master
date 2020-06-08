import { html } from "lit-html";

import {
  modul,
  moduleWithPath,
  moduleWithProgress,
  moduleComplete,
  trail,
  trailWithProgress,
  trailComplete
} from "../../../../__fixtures__/content";

export default {
  title: "tds/tds-content-header",
  parameters: {
    modules: ["/modules/tds-content-header.js"],
    chromatic: {
      viewports: [400, 800, 1199]
    }
  }
};

export const Module = () => html`
  <tds-content-header lang="en" .summary=${modul}></tds-content-header>
`;

export const ModuleWithPath = () => html`
  <tds-content-header lang="en" .summary=${moduleWithPath}></tds-content-header>
`;

export const Trail = () => html`
  <tds-content-header lang="en" .summary=${trail}></tds-content-header>
`;

export const ModuleWithProgress = () => html`
  <tds-content-header
    lang="en"
    .summary=${moduleWithProgress}
  ></tds-content-header>
`;

export const TrailWithProgress = () => html`
  <tds-content-header
    lang="en"
    .summary=${trailWithProgress}
    @navigate=${(e: CustomEvent) => console.log("summary", e.detail)}
  ></tds-content-header>
`;

export const ModuleComplete = () => html`
  <tds-content-header lang="en" .summary=${moduleComplete}></tds-content-header>
`;

export const TrailComplete = () => html`
  <tds-content-header lang="en" .summary=${trailComplete}></tds-content-header>
`;

export const TrailLocalization = () => html`
  <h3>no lang</h3>
  <tds-content-header .summary=${trailComplete}></tds-content-header>

  <h3>lang="en"</h3>
  <tds-content-header lang="en" .summary=${trailComplete}></tds-content-header>

  <h3>lang="es"</h3>
  <tds-content-header lang="es" .summary=${trailComplete}></tds-content-header>

  <h3>lang="es-MN"</h3>
  <tds-content-header
    lang="es-MN"
    .summary=${trailComplete}
  ></tds-content-header>

  <h3>lang="es-MX"</h3>
  <tds-content-header
    lang="es-MX"
    .summary=${trailComplete}
  ></tds-content-header>

  <h3>lang="bob"</h3>
  <tds-content-header lang="bob" .summary=${trailComplete}></tds-content-header>
`;
