import { html } from "lit-html";

export default {
  title: "th/th-footer-global",
  parameters: {
    modules: ["/modules/th-footer-global.js"]
  }
};

export const Base = () => html`
  <th-footer-global></th-footer-global>
`;

export const LanguagePicker = () => html`
  <th-footer-global>
    <div slot="language-picker">
      <select
        ><option>what</option></select
      >
    </div>
  </th-footer-global>
`;
