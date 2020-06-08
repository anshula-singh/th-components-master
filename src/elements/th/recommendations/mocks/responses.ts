export const recommendationItems = [
  {
    apiName: "ai_basics",
    title: "Artificial Intelligence Basics",
    iconUrl:
      "https://res.cloudinary.com/hfhdlcnhp/q_70,f_auto,fl_lossy/learn/modules/einstein-account-based-marketing/1f6f7c368955a4d12b101445e818c26d_badge.png",
    contentType: "module",
    favorited: false,
    url: "/content/learn/modules/ai_basics"
  },
  {
    apiName: "responsible-creation-of-artificial-intelligence",
    title: "Responsible Creation of Artificial Intelligence",
    iconUrl:
      "https://res.cloudinary.com/hfhdlcnhp/q_70,f_auto,fl_lossy/learn/modules/pw-api-basics/c413e7b069e34fdacc936921e71a38ec_badge.png",
    contentType: "module",
    favorited: true,
    url:
      "/content/learn/modules/responsible-creation-of-artificial-intelligence"
  }
];

export const recommendations = {
  withItems: { data: recommendationItems },
  empty: { data: [] }
};

export const favorites = {};
