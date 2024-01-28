import { APPLICATION_NAME } from "./applicationName";

export type ApplicationImages = {
  [K in (typeof APPLICATION_NAME)[number]]: {
    src: string;
    alt: string;
  }[];
};

export const applicationImages = {
  TODO_Application: [
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
  ],
  share_diary: [
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
  ],
};
