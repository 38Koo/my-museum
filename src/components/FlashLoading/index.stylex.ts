import * as stylex from "@stylexjs/stylex";
import { fonts } from "../../app/globalTokens.stylex";

export const flashLoadingStyle = stylex.create({
  base: {
    height: "100vh",
  },
  canvas: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  font: {
    fontFamily: fonts.loadingFont,
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "black",
  },
});
