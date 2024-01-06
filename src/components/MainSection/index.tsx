import { stylex } from "@stylexjs/stylex";
import { EditorArea } from "./EditorArea";
import { mainStyle } from "./index.stylex";
import { DescriptionArea } from "./DiscriptionArea";
import { HoverProvider } from "../../context/hoverContext";

export const MainSection = () => {
  return (
    <HoverProvider>
      <div {...stylex.props(mainStyle.base)}>
        <EditorArea />
        <DescriptionArea />
      </div>
    </HoverProvider>
  );
};
