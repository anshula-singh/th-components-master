import { html } from "lit-html";

export default {
  title: "tm/tm-card-grid-a",
  parameters: {
    chromatic: {
      viewports: [450, 800, 1199]
    },
    modules: ["/modules/tm-card-grid-a.js"]
  }
};

export const Base = () => html`
  <tm-card-grid-a img-aspect="60%">
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello A"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello B"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello C"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello D"
    ></tm-grid-item>
    <tm-grid-item
      cta-href="/"
      cta-title="Read More"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello E"
    ></tm-grid-item>
  </tm-card-grid-a>
`;

export const ImageFull = () => html`
  <tm-card-grid-a img-aspect="60%" img-type="full">
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello A"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello B"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello C"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello D"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello E"
    ></tm-grid-item>
  </tm-card-grid-a>
`;

export const ImageLeft = () => html`
  <tm-card-grid-a img-aspect="60%" img-type="left">
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello A"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello B"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello C"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello D"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      img-src="/images/card-a.png"
      title="Hello E"
    ></tm-grid-item>
  </tm-card-grid-a>
`;
