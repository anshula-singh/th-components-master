import { html } from "lit-html";

export default {
  title: "tm/tm-skills-grid-a",
  parameters: {
    modules: ["/modules/tm-skills-grid-a.js"]
  }
};

export const Base = () => html`
  <tm-skills-grid-a>
    <tm-skills-card-a
      title="General skills to develop"
      description="These are the most common general skills listed in job postings for Contract Tracer roles."
    >
      <tm-skill-item
        title="Communication (written/verbal)"
        value="46"
      ></tm-skill-item>
      <tm-skill-item
        href="#"
        title="Stakeholder Engagement"
        value="32"
      ></tm-skill-item>
      <tm-skill-item href="#" title="Research" value="38"></tm-skill-item>
      <tm-skill-item
        href="#"
        title="Project Management"
        value="43"
      ></tm-skill-item>
      <tm-skill-item
        href="#"
        title="Customer Service"
        value="24"
      ></tm-skill-item>
    </tm-skills-card-a>
    <tm-skills-card-a
      title="Technical and specialized skills to master"
      description="You'll need these frequently requested skills to really excel. Good news is will teach you them for free!"
      theme="warm"
    >
      <tm-skill-item
        href="#"
        title="Data Management"
        value="80"
      ></tm-skill-item>
      <tm-skill-item href="#" title="Medical Ethics" value="65"></tm-skill-item>
      <tm-skill-item href="#" title="Privacy" value="75"></tm-skill-item>
      <tm-skill-item
        href="#"
        title="Salesforce Health Cloud"
        value="43"
      ></tm-skill-item>
      <tm-skill-item
        href="#"
        title="Virology & Epdiemiology"
        value="42"
      ></tm-skill-item>
    </tm-skills-card-a>
  </tm-skills-grid-a>
`;
