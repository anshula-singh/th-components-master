import { html } from "lit-html";

export default {
  title: "tm/tm-page-navigation-a",
  parameters: {
    modules: ["/modules/tm-page-navigation-a.js"]
  }
};

export const Base = () => html`
  <tm-page-navigation-a>
    <tm-page-navigation-item
      href="/"
      title="Salesforce Architect"
    ></tm-page-navigation-item>
    <tm-page-navigation-item
      active
      href="/"
      title="Design"
    ></tm-page-navigation-item>
    <tm-page-navigation-item
      href="/"
      title="Deliver"
    ></tm-page-navigation-item>
    <tm-page-navigation-item
      href="/"
      title="Govern"
    ></tm-page-navigation-a-item>
    <tm-page-navigation-item
      href="/"
      title="Roadmap"
    ></tm-page-navigation-item>
  </tm-page-navigation-a>
`;
