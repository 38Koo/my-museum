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
    background: "linear-gradient(to right, #EB6137, #F7B749, #E50011, orange)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  paragraph: {
    fontSize: text.lg,
  },
});
