"use client";
import React, { Ref, useEffect, useRef, useState } from "react";
import { FlashLoading } from "../components/FlashLoading";
import { HeadingSection } from "../components/HeadingSection";
import * as stylex from "@stylexjs/stylex";
import { MainSection } from "../components/MainSection";
import { useStore } from "zustand";
import { editorSentenceStore } from "../store/editorSentence";
import { APPLICATION_NAME } from "../const/applicationName";
import { descriptions } from "../const/descriptions";

export default function Home() {
  const [showFlash, setShowFlash] = useState(true);
  const rootRef = useRef<HTMLElement>(null);
  const mainSectionRefArray = useRef<Ref<HTMLDivElement>[]>([]);
  const { updateSentence } = useStore(editorSentenceStore);
  const observerRef = useRef<IntersectionObserver | null>(null);
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
    const scrollPosition = rootRef.current?.scrollTop;

    const entries = APPLICATION_NAME.map((app, index) => {
      if (isIntersectionRef.current[index]) {
        return [
          app,
          descriptions[app].substring(
            0,
            Math.floor((scrollPosition - index * 350) / 3)
          ),
        ];
      }
      return [app, ""];
    });
    const updateSentences = Object.fromEntries(entries);

    updateSentence(updateSentences);
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
          ref={mainSectionRefArray.current[index]}
          applicationName={app}
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
