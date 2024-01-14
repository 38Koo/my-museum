import { stylex } from "@stylexjs/stylex";
import { EditorArea } from "./EditorArea";
import { mainStyle } from "./index.stylex";
import { DescriptionArea } from "./DiscriptionArea";
import { HoverProvider } from "../../context/hoverContext";
import { ApplicationNameType } from "../../types/types";

export const MainSection = ({
  applicationName,
}: {
  applicationName: ApplicationNameType;
}) => {
  return (
    <HoverProvider>
      <div {...stylex.props(mainStyle.base)}>
        <EditorArea applicationName={applicationName} />
        <DescriptionArea applicationName={applicationName} />
      </div>
    </HoverProvider>
  );
};
