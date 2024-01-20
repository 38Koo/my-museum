import { stylex } from "@stylexjs/stylex";
import { descriptionAreaStyle } from "./index.stylex";
import { list, textSize } from "../../../app/globalTokens.stylex";
import { useContext } from "react";
import { HoverContext } from "../../../context/hoverContext";
import { Carousel } from "../../Carousel";
import { ApplicationNameType } from "../../../types/types";

type DescriptionAreaProps = {
  applicationName: ApplicationNameType;
};

export const DescriptionArea = ({ applicationName }: DescriptionAreaProps) => {
  const { isHover } = useContext(HoverContext);

  // TODO: 関数作成
  const getCarouselImages = [
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
    {
      src: "/images/next.svg",
      alt: "alternative",
    },
  ];

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
          <ul {...stylex.props(textSize.p, list.base)}>
            <li>GraphQL</li>
            <li>TypeScript</li>
            <li>Chakra UI</li>
            <li>Playwright</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div {...stylex.props(descriptionAreaStyle.carousel)}>
          <Carousel images={getCarouselImages} />
        </div>
      </div>
    </div>
  );
};
