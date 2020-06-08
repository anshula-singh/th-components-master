export type ContentSummary = {
  id: string;
  color?: string;
  description?: string;
  estimatedTime?: number;
  image: string;
  imageBackground?: boolean;
  path?: string;
  pathTarget?: string;
  pretitle?: string;
  pretitleLink?: {
    href: string;
    target?: string;
    title: string;
  };
  title: string;
  points?: number;
  type:
    | "trail"
    | "module"
    | "project"
    | "trailmix"
    | "customstep"
    | "superbadge"
    | "credential";
  user?: {
    estimatedTimeLeft?: number;
    finishedAt?: string; // datetime
    percentageComplete?: number;
    pointsEarned?: number;
  };
};
