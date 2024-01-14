"use client";
import { useEffect, useRef, useState } from "react";
import { FlashLoading } from "../components/FlashLoading";
import { HeadingSection } from "../components/HeadingSection";
import * as stylex from "@stylexjs/stylex";
import { MainSection } from "../components/MainSection";
import { useStore } from "zustand";
import { editorSentenceStore } from "../store/editorSentence";
import { APPLICATION_NAME } from "../const/applicationName";

export default function Home() {
  const [showFlash, setShowFlash] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const { update } = useStore(editorSentenceStore);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const onScroll = () => {
    if (!ref.current?.scrollTop) return;
    const scrollPosition = ref.current?.scrollTop;
    const numberOfChars = Math.floor(scrollPosition / 3);
    update(
      `// Description
フロントエンドエンジニアになって
日が浅い頃に作成したのがこの
TODO Applicationです。
技術スタックは当時実務で使用
していたものに寄せています。
作成後しばらくしてから、Zennで
記事を書くためにPlaywright
を一部導入しました。認証には
Firebaseを使用しています。`.substring(0, numberOfChars)
    );
  };

  return showFlash ? (
    <FlashLoading />
  ) : (
    <main ref={ref} onScroll={() => onScroll()} {...stylex.props(style.base)}>
      <HeadingSection />
      {APPLICATION_NAME.map((app, index) => (
        <MainSection key={index} applicationName={app} />
      ))}
    </main>
  );
}

const style = stylex.create({
  base: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "white",
    color: "black",
    overflow: "auto",
  },
});
