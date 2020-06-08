import { html } from "lit-html";

export default {
  title: "tm/tm-faq-a",
  parameters: {
    modules: ["/modules/tm-faq-a.js"]
  }
};

export const Base = () => html`
  <tm-faq-a>
    <tm-faq-item
      title="Why become a contact tracer on Trailhead?"
      description="Trailhead can not only teach the essential skills needed to become a contact tracer, but is exlusivley in the position to teach you all the skills needed to use the Salesforce platform, used by over 100k companies around the world."
    ></tm-faq-item>
    <tm-faq-item
      title="Why become a contact tracer on Trailhead?"
      description="Trailhead can not only teach the essential skills needed to become a contact tracer, but is exlusivley in the position to teach you all the skills needed to use the Salesforce platform, used by over 100k companies around the world."
    ></tm-faq-item>
    <tm-faq-item
      title="Why become a contact tracer on Trailhead?"
      description="Trailhead can not only teach the essential skills needed to become a contact tracer, but is exlusivley in the position to teach you all the skills needed to use the Salesforce platform, used by over 100k companies around the world."
    ></tm-faq-item>
  </tm-faq-a>
`;
