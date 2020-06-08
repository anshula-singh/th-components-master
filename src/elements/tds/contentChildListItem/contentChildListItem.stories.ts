import { html } from "lit-html";

import { unit, unitComplete } from "../../../../__fixtures__/content";

export default {
  title: "tds/tds-content-child-list-item",
  parameters: {
    modules: ["/modules/tds-content-child-list-item.js"]
  }
};

const navigateHandler = (e: CustomEvent) => {
  console.log("onNavigate", e.detail);
};

export const Base = () => html`
  <div style="padding: 20px; background-color: #f0f0f0;">
    <tds-content-child-list-item
      @navigate=${navigateHandler}
      .summary=${unit}
    ></tds-content-child-list-item>
  </div>
`;

export const Complete = () => html`
  <div style="padding: 20px; background-color: #f0f0f0;">
    <tds-content-child-list-item
      @navigate=${navigateHandler}
      .summary=${unitComplete}
    >
    </tds-content-child-list-item>
  </div>
`;

export const CompleteSpanish = () => html`
  <div style="padding: 20px; background-color: #f0f0f0;">
    <tds-content-child-list-item
      lang="es-MX"
      @navigate=${navigateHandler}
      .summary=${unitComplete}
    >
    </tds-content-child-list-item>
  </div>
`;
