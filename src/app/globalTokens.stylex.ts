import * as stylex from "@stylexjs/stylex";

export const text = stylex.defineVars({
  sm: "calc(10px + 2vmin)", // Small text
  p: "calc(14px + 2vmin)", // Paragraph text
  lg: "calc(18px + 2vmin)", // Large text
  h1: "calc(32px + 2vmin)", // Heading 1
  h2: "calc(28px + 2vmin)", // Heading 2
  h3: "calc(24px + 2vmin)", // Heading 3
  h4: "calc(20px + 2vmin)", // Heading 4
  h5: "calc(18px + 2vmin)", // Heading 5
  h6: "calc(16px + 2vmin)", // Heading 6
});

export const link = stylex.create({
  base: {
    color: "#0000EE",
    textDecoration: {
      default: "none",
      ":hover": "underLine",
    },
  },
});
