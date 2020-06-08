import { html } from "lit-html";

export default {
  title: "tds/tds-content-brick-compact",
  parameters: {
    modules: [
      "/modules/tds-content-brick-compact.js",
      "/modules/tds-button-icon.js",
      "/modules/tds-icon.js"
    ],
    chromatic: {
      viewports: [400, 800, 1199]
    }
  }
};

const summary = {
  id: "1",
  image:
    "https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/spring-20-release-highlights/4fa12e1993e41d92e07be90cfa3c4fdf_badge.png",
  path: "/",
  pretitle: "Module",
  title: "Business Value proposition",
  type: "module"
};

export const Base = () => html`
  <div style="max-width: 400px; padding: 2rem;">
    <tds-content-brick-compact .summary=${summary}> </tds-content-brick-compact>
  </div>
`;

export const CustomAction = () => html`
  <div style="max-width: 400px; padding: 2rem;">
    <tds-content-brick-compact .summary=${summary}>
      <div slot="meta">
        <tds-button-icon aria-label="pin" variant="bare">
          <tds-icon symbol="pin"></tds-icon>
        </tds-button-icon>
      </div>
    </tds-content-brick-compact>
  </div>
`;
