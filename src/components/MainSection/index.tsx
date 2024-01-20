import { stylex } from "@stylexjs/stylex";
import { EditorArea } from "./EditorArea";
import { mainStyle } from "./index.stylex";
import { DescriptionArea } from "./DiscriptionArea";
import { HoverProvider } from "../../context/hoverContext";
import { ApplicationNameType } from "../../types/types";
import { forwardRef } from "react";

type MainSectionProps = {
  applicationName: ApplicationNameType;
  scrollPosition: number;
  appName: string;
};

export const MainSection = forwardRef<HTMLDivElement, MainSectionProps>(
  function MainSection(
    { applicationName, scrollPosition, appName }: MainSectionProps,
    ref
  ) {
    return (
      <HoverProvider>
        <div ref={ref} data-id={appName} {...stylex.props(mainStyle.base)}>
          <EditorArea applicationName={applicationName} />
          <DescriptionArea applicationName={applicationName} />
        </div>
      </HoverProvider>
    );
  }
);
