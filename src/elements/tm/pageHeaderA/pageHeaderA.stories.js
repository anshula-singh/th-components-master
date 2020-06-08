import { html } from "lit-html";

export default {
  title: "tm/tm-page-header-a",
  parameters: {
    modules: ["/modules/tm-page-header-a.js"]
  }
};

export const Base = () => html`
  <tm-page-header-a
    pretitle="Reference Architecture"
    title="Content Lifecycle Management and Modeling"
  >
    <tm-cta title="Download" variant="brand"></tm-cta>
    <tm-cta title="Share"></tm-cta>
  </tm-page-header-a>
`;
