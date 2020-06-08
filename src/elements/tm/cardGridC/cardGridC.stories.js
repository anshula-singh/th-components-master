import { html } from "lit-html";

export default {
  title: "tm/tm-card-grid-c",
  parameters: {
    chromatic: {
      viewports: [380, 800, 1199]
    },
    modules: ["/modules/tm-card-grid-c.js"]
  }
};

export const Base = () => html`
  <tm-card-grid-c img-aspect="60%">
    <tm-grid-item
      cta-href="/posts/1"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      pretitle="Blog by"
      pretitle-href="/user/amylee"
      pretitle-href-text="Amy Lee"
      title="Inspire Your Peers Careers by Sharing Your #AwesomeAdmin Advice"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/posts/1"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      pretitle="Blog by Amy Lee"
      title="Hello B"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/posts/1"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      pretitle="Blog by Amy Lee"
      title="Hello C"
    ></tm-grid-item>
  </tm-card-grid-c>
`;
