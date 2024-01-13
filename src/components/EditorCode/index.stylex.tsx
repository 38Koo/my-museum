import * as stylex from "@stylexjs/stylex";
import { text } from "../../app/globalTokens.stylex";

const blinking = stylex.keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const editorCodeStyle = stylex.create({
  base: {
    fontSize: text.sm,
    color: "white",
    listStyleType: "none",
  },
  comment: {
    color: "#CCCCCC",
  },
  highlightAppTitle: {
    color: "yellow",
  },
  highlightWord: {
    color: "red",
  },
  typing: {
    "::after": {
      content: "",
      background: "red",
      borderStyle: "solid",
      borderWidth: "2px",
      animationName: blinking,
      animationDuration: "1s",
      animationIterationCount: "infinite",
    },
  },
});
