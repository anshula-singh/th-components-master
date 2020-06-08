import { buildCustomElementConstructor } from "lwc";

import ContentHeader from "tds/contentHeader";

import { html, renderIntoBody } from "../../../../shared/testutils";
import { modul } from "../../../../../__fixtures__/content";

customElements.define(
  "tds-content-header",
  buildCustomElementConstructor(ContentHeader)
);

describe("tds-content-header", () => {
  it("renders a content header", () => {
    let element = renderIntoBody(
      html`
        <tds-content-header
          lang="ja"
          .summary=${{ ...modul, path: "/path/to/content" }}
        ></tds-content-header>
      `
    );
    let shadowRoot = element.shadowRoot!;
    expect(shadowRoot.innerHTML).toMatchHTMLSnapshot();
  });
});
