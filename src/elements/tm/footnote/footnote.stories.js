import { html } from "lit-html";

export default {
  title: "tm/tm-footnote",
  parameters: {
    modules: ["/modules/tm-footnote.js"]
  }
};

export const Base = () => html`
  <tm-footnote>
    <h3>Be an Innovator Daily Sweepstakes Rules</h3>
    <p>
      NO PURCHASE NECESSARY. VOID WHERE PROHIBITED. Be an Innovator Daily
      Sweepstakes runs 4/19/19 12:00am PST to 5/6/19 11:59pm PST. Sweepstakes
      open to legal residents of the U.S. (incl. D.C.), Canada (excl. Quebec),
      France, Germany, India, Ireland, Japan, Netherlands, New Zealand, Spain,
      and United Kingdom. Must be 18+ (20+ in Japan). Restrictions apply.
    </p>
    <p>
      See official rules: <a href="#">English</a>, <a href="#">Français</a>,
      Deutsch, <a href="#">Español</a>, <a href="#">日本語</a>,
      <a href="#">हिन्दीद</a>, <a href="#">Lietuvių</a>, <a href="#">Magyar</a>,
      <a href="#">Українська</a>
    </p>
  </tm-footnote>
`;
