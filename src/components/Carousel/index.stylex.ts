import * as stylex from "@stylexjs/stylex";
import { text } from "../../app/globalTokens.stylex";

export const carouselStyle = stylex.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    display: "flex",
    scrollSnapType: "x mandatory",
    overflowX: "hidden",
    width: "300px",
    marginHorizontal: "30px",
  },
  button: {
    width: "50px",
    height: "50px",
    fontSize: text.lg,
    display: "flex",
    justifyContent: "center",
    borderRadius: "999px",
  },
  activeButtonBackground: {
    background: "linear-gradient(to right, #EB6137, #F7B749)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  inactiveButtonBackground: {
    background: "#CCCCCC",
  },
});
