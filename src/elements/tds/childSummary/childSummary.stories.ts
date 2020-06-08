import { html } from "lit-html";

export default {
  title: "tds/tds-child-summary",
  parameters: {
    modules: ["/modules/tds-child-summary.js"]
  }
};

export const Base = () => html`
  <div style="padding: 20px; background-color: #f0f0f0;">
    <tds-child-summary
      title="Send Email Through Salesforce"
      subtitle="+100 Points"
      href="/"
    ></tds-child-summary>
  </div>
`;

export const Complete = () => html`
  <div style="padding: 20px; background-color: #f0f0f0;">
    <tds-child-summary
      title="Help Your Reps Use Activities"
      subtitle="+100 Points"
      complete="true"
    >
    </tds-child-summary>
  </div>
`;
