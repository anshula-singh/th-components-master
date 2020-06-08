import { buildCustomElementConstructor } from "lwc";

import EventsA from "tm/eventsA";

export { EventsA };

customElements.define("tm-events-a", buildCustomElementConstructor(EventsA));
