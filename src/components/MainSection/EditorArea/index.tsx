import { stylex } from "@stylexjs/stylex";
import { editorAreaStyle } from "./index.stylex";
import { useContext } from "react";
import { HoverContext } from "../../../context/hoverContext";
import { ApplicationNameType } from "../../../types/types";
import { EditorCode } from "../../EditorCode";

type EditorAreaProps = {
  applicationName: ApplicationNameType;
};

export const EditorArea = ({ applicationName }: EditorAreaProps) => {
  const { setIsHover } = useContext(HoverContext);

  return (
    <div
      {...stylex.props(editorAreaStyle.base)}
      onClick={() => {
        setIsHover((previous) => !previous);
      }}
    >
      <EditorCode applicationName={applicationName} />
    </div>
  );
};
