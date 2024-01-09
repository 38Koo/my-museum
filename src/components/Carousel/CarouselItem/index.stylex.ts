import * as stylex from "@stylexjs/stylex";
import { text } from "../../../app/globalTokens.stylex";

export const carouselItemStyle = stylex.create({
  base: {
    position: "relative",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    flex: "none",
    scrollSnapAlign: "start",

    borderStyle: "solid",
    borderWidth: 2,
  },
  alt: {
    fontSize: text.sm,
    paddingHorizontal: "10px",
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(150, 168, 174, 0.5)",
  },
});
