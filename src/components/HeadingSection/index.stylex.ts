import * as stylex from "@stylexjs/stylex";
import { text } from "../../app/globalTokens.stylex";

export const headingStyle = stylex.create({
  base: {
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: "20px",
  },
  header: {
    fontSize: text.h1,
    background: "linear-gradient(to right, #1D4B69, #6CB2D3, #94A1A9, #D9E9E5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  paragraph: {
    fontSize: text.lg,
  },
});
