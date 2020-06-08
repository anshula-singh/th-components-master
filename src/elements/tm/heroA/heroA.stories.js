import { html } from "lit-html";

export default {
  title: "tm/tm-hero-a",
  parameters: {
    chromatic: {
      viewports: [400, 1100, 1199]
    },
    modules: ["/modules/tm-hero-a.js"]
  }
};

export const Base = () => html`
  <tm-hero-a
    cta-href="/"
    cta-label="CTA"
    img-src="/images/hero-a-architect.png"
    img-align="bottom"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Hello
Architects"
  ></tm-hero-a>
`;

export const Light = () => html`
  <tm-hero-a
    background="light"
    cta-href="/"
    cta-label="CTA"
    img-src="/images/hero-a-architect.png"
    img-align="bottom"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Hello
Architects"
  ></tm-hero-a>
`;

export const Dark = () => html`
  <tm-hero-a
    background="dark"
    cta-href="/"
    cta-label="CTA"
    img-src="/images/hero-a-architect.png"
    img-align="bottom"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Hello
Architects"
  ></tm-hero-a>
`;
