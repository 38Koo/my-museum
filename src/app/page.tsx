"use client";
import { useEffect, useState } from "react";
import { FlashLoading } from "../components/FlashLoading";
import { HeadingSection } from "../components/HeadingSection";
import * as stylex from "@stylexjs/stylex";
import { MainSection } from "../components/MainSection";

export default function Home() {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showFlash ? (
    <FlashLoading />
  ) : (
    <main {...stylex.props(style.base)}>
      <HeadingSection />
      <MainSection />
    </main>
  );
}

const style = stylex.create({
  base: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "white",
    color: "black",
  },
});
