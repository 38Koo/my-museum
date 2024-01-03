import * as stylex from "@stylexjs/stylex";

export const DARK = "@media (prefers-color-scheme: dark)";

export const layoutStyle = stylex.create({
  body: {
    color: `red`,
    height: "100vh",
  },
});
