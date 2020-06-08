import { track, LightningElement } from "lwc";

import { footerContent } from "../../../../__fixtures__/footer";

import { FooterGlobal } from "./types";

export default class extends LightningElement {
  @track footerContent = footerContent;

  private get content(): FooterGlobal {
    return footerContent.global;
  }
}
