import { html } from "lit-html";

export default {
  title: "tm/tm-page",
  parameters: {
    modules: ["/modules/tm-page.js"]
  }
};

export const Base = () => html`
  <tm-page>
    Hello
  </tm-page>
`;
