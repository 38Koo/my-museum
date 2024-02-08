import { APPLICATION_NAME } from "./applicationName";

export type UsedTechnology = {
  [K in (typeof APPLICATION_NAME)[number]]: string[];
};

export const usedTechnology = {
  TODO_Application: [
    "GraphQL",
    "TypeScript",
    "Chakra",
    "Playwright",
    "Firebase",
  ],
  share_diary: ["msw", "Tailwind", "Redux", "NextAuth.js"],
  "my-museum": ["StyleX", "Three.js", "zustand"],
};
