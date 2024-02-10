import { APPLICATION_NAME } from "./applicationName";

export type HighlightWords = {
  [K in (typeof APPLICATION_NAME)[number]]: {
    appTitle: string;
    point: string[];
    comment: string;
  };
};

export const highlightWords = {
  TODO_Application: {
    appTitle: "TODO Application",
    point: ["Playwright", "Firebase"],
    comment: "//",
  },
  share_diary: {
    appTitle: "share_diary",
    point: ["カレンダー", "Express", "Prisma", "msw"],
    comment: "//",
  },
  "my-museum": {
    appTitle: "my-museum",
    point: ["Three.js", "StyleX", "IntersectionObserver API"],
    comment: "//",
  },
};
