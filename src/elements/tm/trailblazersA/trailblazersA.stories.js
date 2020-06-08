import { html } from "lit-html";

export default {
  title: "tm/tm-trailblazers-a",
  parameters: {
    chromatic: {
      viewports: [400, 800, 1199]
    },
    modules: ["/modules/tm-trailblazers-a.js"]
  }
};

export const Base = () => html`
  <tm-trailblazers-a>
    <tm-trailblazer-item
      cta-href="/"
      cta-title="My Story"
      img-src="/images/card-a.png"
      location="Sacremento, California"
      name="Jim Smith A"
      profile-href="https://trailblazer.me/jima"
      profile-title="trailblazer.me/jima"
      rank="Ranger"
      role="Architect, US Bank"
      since="Trailblazer Since 2018"
    ></tm-trailblazer-item>
    <tm-trailblazer-item
      cta-href="/"
      cta-title="My Story"
      img-src="/images/card-a.png"
      location="Sacremento, California"
      name="Jim Smith B"
      profile-href="https://trailblazer.me/jimb"
      profile-title="trailblazer.me/jimb"
      rank="Ranger"
      role="Architect, US Bank"
      since="Trailblazer Since 2018"
    ></tm-trailblazer-item>
    <tm-trailblazer-item
      cta-href="/"
      cta-title="My Story"
      img-src="/images/card-a.png"
      location="Sacremento, California"
      name="Jim Smith C"
      profile-href="https://trailblazer.me/jimc"
      profile-title="trailblazer.me/jimc"
      rank="Ranger"
      role="Architect, US Bank"
      since="Trailblazer Since 2018"
    ></tm-trailblazer-item>
  </tm-trailblazers-a>
`;
