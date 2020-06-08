import { buildCustomElementConstructor } from "lwc";

import SkillsCardA from "tm/skillsCardA";

export { SkillsCardA };

customElements.define(
  "tm-skills-card-a",
  buildCustomElementConstructor(SkillsCardA)
);
