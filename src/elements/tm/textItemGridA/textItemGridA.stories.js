import { html } from "lit-html";

export default {
  title: "tm/tm-text-item-grid-a",
  parameters: {
    chromatic: {
      viewports: [400, 800, 1199]
    },
    modules: ["/modules/tm-text-item-grid-a.js"]
  }
};

export const Base = () => html`
  <tm-text-item-grid-a>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello A"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello B"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello C"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello D"
    ></tm-grid-item>
    <tm-grid-item
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello E"
    ></tm-grid-item>
  </tm-text-item-grid-a>
`;

export const Icon = () => html`
  <tm-text-item-grid-a icon-type="left">
    <tm-grid-item
      icon-symbol="account"
      icon-sprite="standard"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello A"
    ></tm-grid-item>
    <tm-grid-item
      icon-symbol="activity"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello B"
    ></tm-grid-item>
    <tm-grid-item
      icon-symbol="activity"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello C"
    ></tm-grid-item>
    <tm-grid-item
      icon-symbol="activity"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello D"
    ></tm-grid-item>
    <tm-grid-item
      icon-symbol="activity"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit placerat, scelerisque libero sed, mattis orci."
      title="Hello E"
    ></tm-grid-item>
  </tm-text-item-grid-a>
`;
