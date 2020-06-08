import { buildCustomElementConstructor } from "lwc";

import SkillsGridA from "tm/skillsGridA";

export { SkillsGridA };

customElements.define(
  "tm-skills-grid-a",
  buildCustomElementConstructor(SkillsGridA)
);
