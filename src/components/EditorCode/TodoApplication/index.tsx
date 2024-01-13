import { stylex } from "@stylexjs/stylex";
import { editorCodeStyle } from "../index.stylex";
import { useStore } from "zustand";
import { editorSentenceStore } from "../../../store/editorSentence";

export const TodoApplicationEditor = () => {
  const { sentence } = useStore(editorSentenceStore);
  const lines = sentence.split("\n");

  const highlightWord = {
    appTitle: "TODO Application",
    point: ["Playwright", "Firebase"],
    comment: "//",
  };

  // NOTE: highlightWordが複数行にまたがるパターンには対応できていない
  return (
    <pre>
      <ol {...stylex.props(editorCodeStyle.base)}>
        {lines.map((line, index) => {
          const isLastLine = index === lines.length - 1;

          const highLightWords = Object.values(highlightWord)
            .flat()
            .filter((word) => line.includes(word))
            .sort((a, b) => line.indexOf(a) - line.indexOf(b));

          // default
          if (highLightWords.length === 0) {
            return (
              <li
                key={index}
                {...stylex.props(isLastLine ? editorCodeStyle.typing : null)}
              >
                {line}
              </li>
            );
          }

          // コメント行
          if (highLightWords[0] === "//") {
            return (
              <li
                key={index}
                {...stylex.props(
                  editorCodeStyle.comment,
                  isLastLine ? editorCodeStyle.typing : null
                )}
              >
                {line}
              </li>
            );
          }

          // ハイライト文字が入っている場合
          const separateSentence = line.split(
            new RegExp(highLightWords.join("|"))
          );

          return (
            <li
              key={index}
              {...stylex.props(isLastLine ? editorCodeStyle.typing : null)}
            >
              {separateSentence.flatMap((item, index) => [
                item,
                <span
                  key={index}
                  {...stylex.props(
                    highLightWords[index] === highlightWord.appTitle
                      ? editorCodeStyle.highlightAppTitle
                      : editorCodeStyle.highlightWord
                  )}
                >
                  {highLightWords[index]}
                </span>,
              ])}
            </li>
          );
        })}
      </ol>
    </pre>
  );
};
