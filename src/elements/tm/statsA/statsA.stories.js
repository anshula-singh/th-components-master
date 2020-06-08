import { html } from "lit-html";

export default {
  title: "tm/tm-stats-a",
  parameters: {
    modules: ["/modules/tm-stats-a.js"]
  }
};

export const Base = () => html`
  <tm-stats-a>
    <tm-stat-item
      title="$15-$35"
      description="average hourly pay (US data)"
    ></tm-stat-item>
    <tm-stat-item
      title="200K"
      description="estimated tracers needed to safely reopen (US data)"
    ></tm-stat-item>
    <tm-stat-item
      title="45 States"
      description="are actively looking to hire"
    ></tm-stat-item>
    <tm-stat-item title="75%" description="can work from home"></tm-stat-item>
  </tm-stats-a>
`;
