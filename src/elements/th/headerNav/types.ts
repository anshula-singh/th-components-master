export type Link = {
  href: string;
  target: string | null;
};

export type NavLink = {
  label: string;
  link?: Link;
};

export type NavItem = NavLink & {
  isActive?: boolean;
  sections?: {
    label: string;
    items: MenuItem[];
  }[];
  sectionColumns?: number[];
};

export type MenuItem = {
  label: string;
  link: Link;
  iconUrl?: string;
  description?: string;
  items?: MenuItem[];
};

export type MenuHeading = {
  type: "heading";
  label: string;
};
