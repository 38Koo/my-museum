import { APPLICATION_NAME } from "./applicationName";

export type Descriptions = {
  [K in (typeof APPLICATION_NAME)[number]]: string;
};

export const descriptions: Descriptions = {
  TODO_Application: `// Tap here
フロントエンドエンジニアになって
日が浅い頃に作成したのがこの
TODO Applicationです。
技術スタックは当時実務で使用
していたものに寄せています。
作成後しばらくしてから、Zennで
記事を書くためにPlaywright
を一部導入しました。認証には
Firebaseを使用しています。`,

  share_diary: `// Description
日記シェアSNS share_diary
を作成しました。UIがカレンダー
のようになっているのが特徴です。
バックエンドも実装していて、
Expressを採用しています。
ORMにはPrismaを使用しました。
API作成前にフロントエンドでmsw
を使ってAPIをモックするなど開発を
工夫して行いました。`,
} as const;
