import { html } from "lit-html";

export default {
  title: "th/th-footer-links",
  parameters: {
    modules: ["/modules/th-footer-links.js"]
  }
};

export const Base = () => html`
  <style>
    #root {
      padding: 0;
    }
  </style>
  <th-footer-links></th-footer-links>
`;
