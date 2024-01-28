import { stylex } from "@stylexjs/stylex";
import { descriptionAreaStyle } from "./index.stylex";
import { list, textSize } from "../../../app/globalTokens.stylex";
import { useContext } from "react";
import { HoverContext } from "../../../context/hoverContext";
import { Carousel } from "../../Carousel";
import { ApplicationNameType } from "../../../types/types";
import { usedTechnology } from "../../../const/usedTechnology";
import { applicationImages } from "../../../const/applicationImages";

type DescriptionAreaProps = {
  applicationName: ApplicationNameType;
};

export const DescriptionArea = ({ applicationName }: DescriptionAreaProps) => {
  const { isHover } = useContext(HoverContext);

  const technologyList = usedTechnology[applicationName];

  const carouselImages = applicationImages[applicationName];

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
          {!!technologyList && (
            <ul {...stylex.props(textSize.p, list.base)}>
              {technologyList.map((technology) => {
                return <li key={technology}>{technology}</li>;
              })}
            </ul>
          )}
        </div>
        <div {...stylex.props(descriptionAreaStyle.carousel)}>
          <Carousel images={carouselImages} />
        </div>
      </div>
    </div>
  );
};
