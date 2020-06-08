import { html } from "lit-html";

export default {
  title: "tm/tm-card-grid-b",
  parameters: {
    chromatic: {
      viewports: [450, 800, 1000, 1199]
    },
    modules: ["/modules/tm-card-grid-b.js"]
  }
};

export const Base = () => html`
  <tm-card-grid-b>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello A"
      pretitle="Type of Content"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello B"
      pretitle="Blog by"
      pretitle-href="/user/sharon"
      pretitle-href-text="Sharon Tate"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello C"
      pretitle="Type of Content"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello D"
      pretitle="Type of Content"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello E"
      pretitle="Type of Content"
    ></tm-grid-item>
  </tm-card-grid-b>
`;
