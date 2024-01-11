import { stylex } from "@stylexjs/stylex";
import { editorAreaStyle } from "./index.stylex";
import { useContext } from "react";
import { HoverContext } from "../../../context/hoverContext";
import { TodoApplicationEditor } from "../../EditorCode/TodoApplication";

export const EditorArea = () => {
  const { setIsHover } = useContext(HoverContext);

  return (
    <div
      {...stylex.props(editorAreaStyle.base)}
      onClick={() => {
        setIsHover((previous) => !previous);
      }}
    >
      <TodoApplicationEditor />
    </div>
  );
};
