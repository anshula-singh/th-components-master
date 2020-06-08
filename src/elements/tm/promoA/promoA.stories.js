import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

export default {
  title: "tm/tm-promo-a",
  parameters: {
    chromatic: {
      viewports: [400, 800, 1199]
    },
    modules: ["/modules/tm-promo-a.js"]
  }
};

export const Base = () => html`
  <div style=${styleMap({ padding: "2rem" })}>
    <tm-promo-a
      title="Get Signed Up for Architect Dreamforce Sessions"
      description="Sessions are filling up fast! This is basically an ad."
      img-src="/images/promo.png"
      cta-href="/"
      cta-title="Sign Up"
    ></tm-promo-a>
  </div>
`;

export const Shadow = () => html`
  <div style=${styleMap({ padding: "2rem" })}>
    <tm-promo-a
      title="Get Signed Up for Architect Dreamforce Sessions"
      description="Sessions are filling up fast! This is basically an ad."
      img-src="/images/promo.png"
      cta-href="/"
      cta-title="Sign Up"
      shadow-color-start="red"
      shadow-color-end="purple"
    ></tm-promo-a>
  </div>
`;
