export type User = {
  avatarPath: string;
  badgesCount: number;
  fullName: string;
  pointsCount: number;
  profileUrl: Link;
  progressRing: {
    completedPercent: number;
  };
  userMenu: {
    bgPath: string;
    logout: {
      label: string;
      link: Link;
      logoutSrc: string;
    };
    navigation: {
      label: string;
      link: Link;
    }[];
  };
};

type Link = {
  href: string;
  target?: string;
};
