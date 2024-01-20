"use client";
import React, { Ref, useEffect, useRef, useState } from "react";
import { FlashLoading } from "../components/FlashLoading";
import { HeadingSection } from "../components/HeadingSection";
import * as stylex from "@stylexjs/stylex";
import { MainSection } from "../components/MainSection";
import { useStore } from "zustand";
import { editorSentenceStore } from "../store/editorSentence";
import { APPLICATION_NAME } from "../const/applicationName";

export default function Home() {
  const [showFlash, setShowFlash] = useState(true);
  const rootRef = useRef<HTMLElement>(null);
  const mainSectionRefArray = useRef<Ref<HTMLDivElement>[]>([]);
  const { updateSentence } = useStore(editorSentenceStore);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isIntersectionRef = useRef<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mainSectionCurrent = mainSectionRefArray.current;
    mainSectionRefArray.current = APPLICATION_NAME.map(() =>
      React.createRef<HTMLDivElement>()
    );

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        const index = APPLICATION_NAME.findIndex((app) => app === id);

        isIntersectionRef.current[index] = entry.isIntersecting;
      });
    });

    APPLICATION_NAME.map((_, index) => {
      const currentElement = mainSectionCurrent[index];

      if (
        currentElement &&
        "current" in currentElement &&
        currentElement.current !== null
      ) {
        observerRef.current?.observe(currentElement.current);
      }
    });

    return () => {
      APPLICATION_NAME.map((_, index) => {
        const currentElement = mainSectionCurrent[index];
        if (
          currentElement &&
          "current" in currentElement &&
          currentElement.current !== null
        ) {
          observerRef.current?.unobserve(currentElement.current);
        }
      });
    };
  }, [showFlash, mainSectionRefArray]);

  const onScroll = () => {
    if (!rootRef.current?.scrollTop) return;
    setScrollPosition(rootRef.current.scrollTop);
    const scrollPosition = rootRef.current?.scrollTop;
    const numberOfChars = Math.floor(scrollPosition / 10);

    updateSentence(
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
    <main
      ref={rootRef}
      onScroll={() => onScroll()}
      {...stylex.props(style.base)}
    >
      <HeadingSection />
      {APPLICATION_NAME.map((app, index) => (
        <MainSection
          key={index}
          appName={app}
          ref={mainSectionRefArray.current[index]}
          applicationName={app}
          scrollPosition={scrollPosition}
        />
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
