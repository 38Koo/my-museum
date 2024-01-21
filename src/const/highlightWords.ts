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

  Share_Calender: {
    appTitle: "Share_Calender",
    point: ["カレンダー", "Firebase"],
    comment: "//",
  },
};
