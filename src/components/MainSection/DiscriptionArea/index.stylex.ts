import * as stylex from "@stylexjs/stylex";
import { text } from "../../../app/globalTokens.stylex";

export const descriptionAreaStyle = stylex.create({
  base: {
    backgroundColor: "white",
    height: "100%",
    width: "80%",
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: "30px 0 0 30px",
    paddingHorizontal: "50px",
    paddingVertical: "20px",
  },
  widthWhenHover: {
    width: "60%",
  },
  h2: {
    fontSize: text.h2,
  },
  layout: {
    display: "flex",
    marginTop: "3rem",
  },
  usedTechnology: {
    flexShrink: 0,
    flexGrow: 0,
    flexBasis: "310px",
    // NOTE: 上記のショートハンド flex: "0 0 310px",
  },
  carousel: {
    flexGrow: 1,
  },
});
