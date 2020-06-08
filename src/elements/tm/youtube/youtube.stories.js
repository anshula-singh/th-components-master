import { html } from "lit-html";

export default {
  title: "tm/tm-youtube",
  parameters: {
    modules: ["/modules/tm-youtube.js"]
  }
};

export const Base = () => html`
  <tm-youtube video-id="dQw4w9WgXcQ"></tm-youtube>
`;
