"use client";
import { useEffect, useState } from "react";
import { FlashLoading } from "../components/FlashLoading";
import { HeadingSection } from "../components/HeadingSection";
import * as stylex from "@stylexjs/stylex";

export default function Home() {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlash(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return showFlash ? (
    <FlashLoading />
  ) : (
    <main {...stylex.props(style.base)}>
      <HeadingSection />
    </main>
  );
}

const style = stylex.create({
  base: {
    height: "100vh",
    width: "100vw",
  },
});
