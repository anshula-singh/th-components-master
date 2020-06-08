import { Completion } from "../lib/search";
import { Recent } from "../lib/user";
import { Config } from "../search";

export const completions: { completions: Completion[] } = {
  completions: [
    {
      expression: "LWC",
      score: 1,
      highlighted: "LWC",
      executableConfidence: 1
    },
    {
      expression: "Visualforce Pages",
      score: 1,
      highlighted: "Visualforce Pages",
      executableConfidence: 1
    }
  ]
};

export const config: { data: Config } = {
  data: {
    coveo: {
      locale: "en",
      querySuggestUrl: "http://www.coveo.com/suggest"
    },
    csrfToken: "CSRF_TOKEN",
    labels: {
      placeholder: "Search for modules, trails, and more...",
      recentFavorites: "Recent Favorites",
      recentItems: "Recently Viewed"
    },
    searchUrl: "/search"
  }
};

export const recents: { recents: Recent[] } = {
  recents: [
    {
      color: null,
      completion: null,
      content_type: "Module",
      icon_url: "/images/badge-1.png",
      path: "/en/content/learn/modules/salesforce-cms-basics",
      title: "Salesforce CMS Basics",
      type: "recent_favorite"
    }
  ]
};

export const token = {
  token: "TOKEN"
};
