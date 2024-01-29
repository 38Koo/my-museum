import * as stylex from "@stylexjs/stylex";
import Image from "next/image";
import { carouselItemStyle } from "./index.stylex";

export type CarouselItemProps = {
  src: string;
  alt: string;
};

export const CarouselItem = ({ src, alt }: CarouselItemProps) => {
  return (
    <div {...stylex.props(carouselItemStyle.base)}>
      <Image src={src} width={500} height={281} alt={alt} />
      <p {...stylex.props(carouselItemStyle.alt)}>{alt}</p>
    </div>
  );
};
