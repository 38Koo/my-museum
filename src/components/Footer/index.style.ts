import * as stylex from "@stylexjs/stylex";

export const footerStyle = stylex.create({
  base: {
    borderTopWidth: "8px",
    borderTopStyle: "solid",
    borderTopColor: "#D9E9E5",
    height: "300px",
    width: "100%",
    backgroundColor: "#1D4B69",
  },
  iconForNotFontAweSome: {
    height: "100px",
    width: "100px",
  },
  iconForFontAwesome: {
    fontSize: "100px",
  },
  footerLayout: {
    display: "flex",
    alignItems: "center",
  },
  iconLayout: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
});
