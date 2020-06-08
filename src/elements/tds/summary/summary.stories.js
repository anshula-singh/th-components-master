import { html } from "lit-html";

export default {
  title: "tds/tds-summary",
  parameters: {
    modules: ["/modules/tds-summary.js"],
    chromatic: {
      viewports: [400, 800, 1199]
    }
  }
};

export const Base = () => html`
  <tds-summary
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    href="/"
    pretitle="Pretitle by "
    pretitle-link-href="/"
    pretitle-link-title="Link"
    title="Title"
  >
    <tds-content-icon slot="image" src="/images/badge-1.png"></tds-content-icon>
    <button slot="action">Action</button>
    <span slot="meta-left">Meta left</span>
    <span slot="meta-right">Meta right</span>
  </tds-summary>
`;

export const CustomPretitle = () => html`
  <tds-summary
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    href="/"
    title="Title"
  >
    <tds-content-icon slot="image" src="/images/badge-1.png"></tds-content-icon>
    <div slot="pretitle">Pretitle by <a href="#">Link</a> (custom content)</div>
    <button slot="action">Action</button>
    <span slot="meta-left">Meta left</span>
    <span slot="meta-right">Meta right</span>
  </tds-summary>
`;

export const Brick = () => html`
  <tds-summary
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    display-mode="brick"
    href="/"
    title="Title"
  >
    <tds-content-icon
      slot="image"
      src="/images/badge-1.png"
      size="small"
    ></tds-content-icon>

    <div slot="pretitle">Pretitle by <a href="#">Link</a> (custom content)</div>
    <button slot="action">Action</button>
    <span slot="meta-left">Meta left</span>
    <span slot="meta-right">Meta right</span>
  </tds-summary>
`;

export const BrickTile = () => html`
  <tds-summary
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    display-mode="brick-tile"
    href="/"
    title="Title"
  >
    <tds-content-icon
      slot="image"
      src="/images/badge-1.png"
      size="small"
    ></tds-content-icon>

    <div slot="pretitle">Pretitle by <a href="#">Link</a> (custom content)</div>
    <button slot="action">Action</button>
    <span slot="meta-left">Meta left</span>
    <span slot="meta-right">Meta right</span>
  </tds-summary>
`;

export const BrickCompact = () => html`
  <tds-summary
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    compact
    display-mode="brick-tile"
    href="/"
    title="Title"
  >
    <tds-content-icon
      slot="image"
      src="/images/badge-1.png"
      size="small"
    ></tds-content-icon>

    <div slot="pretitle">Pretitle by <a href="#">Link</a> (custom content)</div>
    <button slot="action">Action</button>
    <span slot="meta-left">Meta left</span>
    <span slot="meta-right">Meta right</span>
  </tds-summary>
`;
