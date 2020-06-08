import { html } from "lit-html";

export default {
  title: "tm/tm-section-a",
  parameters: {
    modules: ["/modules/tm-section-a.js"]
  }
};

export const Base = () => html`
  <tm-section-a
    description="Build apps faster, integrate easier, make apps smarter"
    title="Explore Content"
    cta-href="/"
    cta-title="Explore"
  >
  </tm-section-a>
`;
