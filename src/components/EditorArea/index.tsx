import { stylex } from "@stylexjs/stylex";
import { editorAreaStyle } from "./index.stylex";
import { useContext } from "react";
import { HoverContext, HoverProvider } from "../../context/hoverContext";

export const EditorArea = () => {
  const { isHover, setIsHover } = useContext(HoverContext);

  return (
    <div
      {...stylex.props(editorAreaStyle.base)}
      onClick={() => {
        setIsHover((previous) => !previous);
      }}
    >
      <div>Hello World!</div>
      <div>{"// Description"}</div>
    </div>
  );
};
