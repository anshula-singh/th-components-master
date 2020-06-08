import { html } from "lit-html";

export default {
  title: "tm/tm-events-a",
  parameters: {
    chromatic: {
      viewports: [400, 800, 1199]
    },
    modules: ["/modules/tm-events-a.js"]
  }
};

export const Base = () => html`
  <tm-events-a>
    <tm-event-item
      date="Thursday, January 23, 2020"
      cta-href="/"
      cta-title="Details"
      pretitle="Event"
      time="09:35 AM EST"
      title="Event A"
    ></tm-event-item>
    <tm-event-item
      date="Thursday, January 23, 2020"
      cta-href="/"
      cta-title="Details"
      pretitle="Event"
      time="09:35 AM EST"
      title="Event B"
      location="San Francisco, CA"
    ></tm-event-item>
    <tm-event-item
      date="Thursday, January 23, 2020"
      cta-href="/"
      cta-title="Details"
      pretitle="Event"
      time="09:35 AM EST"
      title="Event C"
      location="San Francisco, CA"
    ></tm-event-item>
    <tm-event-item
      date="Thursday, January 23, 2020"
      cta-href="/"
      cta-title="Details"
      pretitle="Event"
      time="09:35 AM EST"
      title="Event D"
      location="San Francisco, CA"
    ></tm-event-item>
  </tm-events-a>
`;
