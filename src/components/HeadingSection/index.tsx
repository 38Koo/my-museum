import { stylex } from "@stylexjs/stylex";
import { headingStyle } from "./index.stylex";
import Link from "next/link";
import { link } from "../../app/globalTokens.stylex";

export const HeadingSection = () => {
  return (
    <div {...stylex.props(headingStyle.base)}>
      <h1 {...stylex.props(headingStyle.header)}>38Koo Museum</h1>
      <p {...stylex.props(headingStyle.paragraph)}>
        このサイトは{" "}
        <Link href="https://github.com/38Koo" {...stylex.props(link.base)}>
          38Koo
        </Link>{" "}
        の実装をまとめたポートフォリオです。
      </p>
    </div>
  );
};
