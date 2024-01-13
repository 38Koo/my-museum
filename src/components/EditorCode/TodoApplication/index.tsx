import { stylex } from "@stylexjs/stylex";
import { editorCodeStyle } from "../index.stylex";

export const TodoApplicationEditor = () => {
  return (
    <pre>
      <ol {...stylex.props(editorCodeStyle.base)}>
        <li>Hello World!</li>
        <li {...stylex.props(editorCodeStyle.comment)}>{"// Description"}</li>
        <li>フロントエンドエンジニアになって</li>
        <li>日が浅い頃に作成したのがこの</li>
        <li>
          <span {...stylex.props(editorCodeStyle.highlightAppTitle)}>
            TODO Application
          </span>
          です。
        </li>
        <li>技術スタックは当時実務で使用</li>
        <li>していたものに寄せています。</li>
        <li>作成後しばらくしてから、Zennで</li>
        <li>
          記事を書くために
          <span {...stylex.props(editorCodeStyle.highlightWord)}>
            Playwright
          </span>
        </li>
        <li>を一部導入しました。認証には</li>
        <li>
          <span {...stylex.props(editorCodeStyle.highlightWord)}>Firebase</span>
          を使用しています。
        </li>
      </ol>
    </pre>
  );
};
