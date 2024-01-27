import * as stylex from "@stylexjs/stylex";
import { text } from "../../../app/globalTokens.stylex";

export const editorAreaStyle = stylex.create({
  base: {
    backgroundColor: "#002B40",
    height: "100%",
    color: "white",
    fontSize: text.sm,
    paddingHorizontal: "30px",
    paddingVertical: "20px",
  },
});
