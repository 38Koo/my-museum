import * as stylex from "@stylexjs/stylex";

export const FlashLoadingStyle = stylex.create({
  base: {
    height: "100vh",
  },
  canvas: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  font: {
    fontFamily: "Balsam",
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "black",
  },
});
