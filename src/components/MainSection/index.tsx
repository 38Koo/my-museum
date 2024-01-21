import { stylex } from "@stylexjs/stylex";
import { EditorArea } from "./EditorArea";
import { mainStyle } from "./index.stylex";
import { DescriptionArea } from "./DiscriptionArea";
import { HoverProvider } from "../../context/hoverContext";
import { ApplicationNameType } from "../../types/types";
import { forwardRef } from "react";

type MainSectionProps = {
  applicationName: ApplicationNameType;
};

export const MainSection = forwardRef<HTMLDivElement, MainSectionProps>(
  function MainSection({ applicationName }: MainSectionProps, ref) {
    return (
      <HoverProvider>
        <div
          ref={ref}
          data-id={applicationName}
          {...stylex.props(mainStyle.base)}
        >
          <EditorArea applicationName={applicationName} />
          <DescriptionArea applicationName={applicationName} />
        </div>
      </HoverProvider>
    );
  }
);
