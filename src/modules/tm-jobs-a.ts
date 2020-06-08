import { buildCustomElementConstructor } from "lwc";

import JobsA from "tm/jobsA";

export { JobsA };

customElements.define("tm-jobs-a", buildCustomElementConstructor(JobsA));
