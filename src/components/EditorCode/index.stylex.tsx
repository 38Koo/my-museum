import * as stylex from "@stylexjs/stylex";
import { text } from "../../app/globalTokens.stylex";

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
});
