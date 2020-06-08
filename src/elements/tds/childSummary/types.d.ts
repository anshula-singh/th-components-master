export type ChildSummary = {
  id: string;
  title: string;
  estimatedTime: number;
  path?: string;
  user?: {
    finishedAt?: string;
    pointsEarned?: number;
  };
};
