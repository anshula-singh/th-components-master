import { html } from "lit-html";

export default {
  title: "tm/tm-card-grid-d",
  parameters: {
    chromatic: {
      viewports: [400, 800, 1199]
    },
    modules: ["/modules/tm-card-grid-d.js"]
  }
};

export const Base = () => html`
  <tm-card-grid-d>
    <tm-grid-item
      cta-href="/"
      cta-title="Start"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      pretitle="Learning with"
      pretitle-href="/users/astro"
      pretitle-href-text="Astro"
      title="Hello A"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Start"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      img-src="/images/card-a.png"
      pretitle="Hello"
      title="Hello B"
    ></tm-grid-item>
  </tm-card-grid-d>
`;
