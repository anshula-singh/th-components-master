import { ContentSummary } from "../src/elements/tds/contentSummary/types";
import { ChildSummary } from "../src/elements/tds/childSummary/types";

export const modul: ContentSummary = {
  id: "modul1",
  color: "#4b8bc9",
  description:
    "Drive adoption of sales features through customizations that work best for your company.",
  estimatedTime: 30,
  image: "/images/badge-1.png",
  points: 300,
  pretitle: "Module",
  title: "Lightning Experience For Sales",
  type: "module"
};

export const moduleWithPath: ContentSummary = {
  ...modul,
  id: "modulWithPath1",
  path: "/path/to/content"
};

export const moduleWithProgress: ContentSummary = {
  ...modul,
  id: "moduleWithProgress1",
  user: {
    estimatedTimeLeft: 20,
    percentageComplete: 50
  }
};

export const moduleComplete: ContentSummary = {
  ...modul,
  id: "moduleComplete1",
  user: {
    pointsEarned: 250,
    finishedAt: "2020-04-20T15:08:45.000Z",
    percentageComplete: 100
  }
};

export const trail: ContentSummary = {
  color: "#4b8bc9",
  description:
    "Navigate and personalize Analytics, and explore data on desktop and mobile.",
  estimatedTime: 30,
  id: "trail1",
  image: "/images/badge-trail-1.png",
  points: 300,
  pretitle: "Trail",
  title: "Explore With Analytics",
  type: "trail"
};

export const trailWithProgress: ContentSummary = {
  ...trail,
  id: "trailWithProgress1",
  user: {
    estimatedTimeLeft: 20,
    percentageComplete: 50
  }
};

export const trailComplete: ContentSummary = {
  ...trail,
  id: "trailComplete1",
  user: {
    pointsEarned: 500,
    finishedAt: "2020-04-20T15:08:45.000Z",
    percentageComplete: 100
  }
};

export const trailmix: ContentSummary = {
  ...trail,
  id: "trailmix1",
  pretitle: "Trailmix by ",
  pretitleLink: {
    href: "/",
    title: "Trailhead"
  },
  type: "trailmix"
};

export const unit: ChildSummary = {
  id: "unit1",
  title: "Send Email Through Salesforce",
  estimatedTime: 10
};

export const unitComplete: ChildSummary = {
  id: "unit2",
  title: "Send Email Through Salesforce",
  estimatedTime: 10,
  user: {
    finishedAt: "2020-04-20T15:08:45.000Z",
    pointsEarned: 125
  }
};
