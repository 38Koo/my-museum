import { stylex } from "@stylexjs/stylex";
import { descriptionAreaStyle } from "./index.stylex";
import { list, textSize } from "../../../app/globalTokens.stylex";
import Image from "next/image";
import { useContext } from "react";
import { HoverContext } from "../../../context/hoverContext";

export const DescriptionArea = () => {
  const { isHover } = useContext(HoverContext);

  return (
    <div
      {...stylex.props(
        descriptionAreaStyle.base,
        isHover && descriptionAreaStyle.widthWhenHover
      )}
    >
      <h2 {...stylex.props(descriptionAreaStyle.h2)}>TODO Application</h2>
      <div {...stylex.props(descriptionAreaStyle.layout)}>
        <div {...stylex.props(descriptionAreaStyle.usedTechnology)}>
          <h5 {...stylex.props(textSize.h5)}>主な技術スタック</h5>
          <ul {...stylex.props(textSize.p)}>
            <li {...stylex.props(list.base)}>GraphQL</li>
            <li {...stylex.props(list.base)}>TypeScript</li>
            <li {...stylex.props(list.base)}>Chakra UI</li>
          </ul>
        </div>
        <div {...stylex.props(descriptionAreaStyle.images)}>
          <Image src={"/images/next.svg"} width={200} height={250} alt="a" />
          <Image src={"/images/next.svg"} width={200} height={250} alt="a" />
        </div>
      </div>
    </div>
  );
};
