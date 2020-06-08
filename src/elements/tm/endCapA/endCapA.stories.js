import { html } from "lit-html";

export default {
  title: "tm/tm-end-cap-a",
  parameters: {
    modules: ["/modules/tm-end-cap-a.js"]
  }
};

export const Base = () => html`
  <tm-end-cap-a
    cta-href="/"
    cta-label="Get Started"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Begin the Architect Journey Trailmix"
  ></tm-end-cap-a>
`;

export const Light = () => html`
  <tm-end-cap-a
    background="light"
    cta-href="/"
    cta-label="Get Started"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Begin the Architect Journey Trailmix"
  ></tm-end-cap-a>
`;

export const Dark = () => html`
  <tm-end-cap-a
    background="dark"
    cta-href="/"
    cta-label="Get Started"
    subtitle="Connect to your customers in a whole new way with the world's #1 CRM."
    title="Begin the Architect Journey Trailmix"
  ></tm-end-cap-a>
`;
