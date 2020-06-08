export type FooterContent = {
  columns: FooterColumn[];
  social: FooterSocial;
  global: FooterGlobal;
};

export type FooterSocial = {
  heading: string;
  links: FooterSocialLink[];
};

export type FooterGlobal = {
  showIcon: boolean;
  copyright: string | null;
  links: FooterLink[];
};

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export type FooterLink = {
  href: string;
  target?: string;
  label: string;
};

export type FooterSocialLink = FooterLink & {
  type: string;
  iconClassName?: string;
};
