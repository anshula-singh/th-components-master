import { User } from "../types";

export const user: User = {
  avatarPath: "https://trailblazer.me/profilephoto/7291I000000PZKV/F",
  fullName: "Adam Putinski",
  badgesCount: 74,
  pointsCount: 28,
  profileUrl: {
    href: "/en/me/adamputinski"
  },
  progressRing: {
    completedPercent: 90.35
  },
  userMenu: {
    bgPath:
      "https://trailhead.salesforce.com/assets/user-menu-banner-9ab280c3acbf91c77c2e97b37a8ff6f3e16cc0cbec0bbbbb6d90f344da7c5de1.png",
    navigation: [
      {
        label: "Profile",
        link: {
          href: "https://trailblazer.me/id?lang=en_US",
          target: "_blank"
        }
      },
      {
        label: "Settings",
        link: {
          href: "https://trailblazer.me/settings?lang=en_US",
          target: "_blank"
        }
      },
      {
        label: "Favorites",
        link: {
          href: "/users/favorites"
        }
      },
      {
        label: "Hands-on Orgs",
        link: {
          href: "/users/profiles/orgs"
        }
      }
    ],
    logout: {
      label: "Log Out",
      logoutSrc: "https://trailblazer.me/services/auth/rp/oidc/logout",
      link: {
        href: "javascript:SFIDWidget.logout();"
      }
    }
  }
};
