import { track, LightningElement } from "lwc";

import { footerContent } from "../../../../__fixtures__/footer";

import {
  FooterColumn,
  FooterSocial,
  FooterSocialLink
} from "../footerGlobal/types";

export default class extends LightningElement {
  @track footerContent = footerContent;

  private get columns(): FooterColumn[] {
    return this.footerContent.columns;
  }

  private get social(): FooterSocial {
    return this.footerContent.social;
  }

  private get socialLinks(): FooterSocialLink[] {
    let links = this.social.links;

    return links.map(link => {
      return {
        ...link,
        iconClassName: `icon--${link.type}`
      };
    });
  }
}
