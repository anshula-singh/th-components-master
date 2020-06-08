import { html } from "lit-html";

export default {
  title: "tm/tm-hero-b",
  parameters: {
    chromatic: {
      viewports: [400, 1199]
    },
    modules: ["/modules/tm-hero-b.js"]
  }
};

export const Base = () => html`
  <tm-hero-b
    cta-href="/"
    cta-label="CTA"
    img-src="/images/hero-b.png"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Hello Architects"
  ></tm-hero-a>
`;

export const Light = () => html`
  <tm-hero-b
    background="light"
    cta-href="/"
    cta-label="CTA"
    img-src="/images/hero-b.png"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Hello Architects"
  ></tm-hero-a>
`;

export const Dark = () => html`
  <tm-hero-b
    background="dark"
    background-src="/images/architect-bg.svg"
    cta-href="/"
    cta-label="CTA"
    img-src="/images/hero-b.png"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Hello Architects"
  ></tm-hero-a>
`;
