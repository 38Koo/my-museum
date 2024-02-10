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
      src: "/images/TODO_Application/top.png",
      alt: "トップページ",
    },
    {
      src: "/images/TODO_Application/createTask.png",
      alt: "タスク作成画面",
    },
    {
      src: "/images/TODO_Application/taskView.png",
      alt: "タスク一覧画面",
    },
  ],
  share_diary: [
    {
      src: "/images/share_diary/diaryTop.png",
      alt: "日記閲覧画面",
    },
    {
      src: "/images/share_diary/signIn.png",
      alt: "サインイン画面",
    },
  ],
  "my-museum": [
    { src: "/images/my-museum/myMuseumTop.png", alt: "ヘッダーセクション" },
    { src: "/images/my-museum/loadingThree.png", alt: "ローディング画面" },
  ],
};
