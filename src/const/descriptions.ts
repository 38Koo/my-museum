import { APPLICATION_NAME } from "./applicationName";

export type Descriptions = {
  [K in (typeof APPLICATION_NAME)[number]]: string;
};

export const descriptions: Descriptions = {
  TODO_Application: `// Description
フロントエンドエンジニアになって
日が浅い頃に作成したのがこの
TODO Applicationです。
技術スタックは当時実務で使用
していたものに寄せています。
作成後しばらくしてから、Zennで
記事を書くためにPlaywright
を一部導入しました。認証には
Firebaseを使用しています。`,

  Share_Calender: `// Description
カレンダーを作成しました！
ぜひ見てみてください！
TODO Applicationです。
技術スタックは当時実務で使用
していたものに寄せています。
作成後しばらくしてから、Zennで
記事を書くためにPlaywright
を一部導入しました。認証には
Firebaseを使用しています。`,
} as const;
