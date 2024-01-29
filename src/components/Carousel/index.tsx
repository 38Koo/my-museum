import { stylex } from "@stylexjs/stylex";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";
import { carouselStyle } from "./index.stylex";
import { useRef, useState } from "react";

type CarouselProps = {
  images: CarouselItemProps[];
};

const imageMaxWidth = 500;
const imageScrollToRight = imageMaxWidth;
const imageScrollTolLeft = -500;

export const Carousel = ({ images }: CarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isStartPosition, setIsStartPosition] = useState(true);
  const [isLastPosition, setIsLastPosition] = useState(
    images.length > 1 ? false : true
  );
  const imageTotalWidth = imageMaxWidth * images.length;

  const scrollSlide = (
    direction: typeof imageScrollToRight | typeof imageScrollTolLeft
  ) => {
    ref.current?.scrollBy({ left: direction, behavior: "smooth" });

    if (!ref.current) return;

    // FIXME: ここのロジックもっときれいにしたい
    if (
      direction === -imageMaxWidth &&
      ref.current?.scrollLeft === imageMaxWidth
    ) {
      setIsStartPosition(true);
      setIsLastPosition(false);
      return;
    }

    if (
      direction === imageMaxWidth &&
      ref.current.scrollLeft === imageTotalWidth - imageMaxWidth * 2
    ) {
      setIsLastPosition(true);
      setIsStartPosition(false);
      return;
    }
    setIsStartPosition(false);
    setIsLastPosition(false);
  };

  if (images.length === 0) return null;

  return (
    <div {...stylex.props(carouselStyle.base)}>
      {/* TODO: アクセシビリティの観点から、buttonタグは連続した方が良さそう - フォーカスを連続させるため。 */}
      <button
        onClick={
          isStartPosition ? () => {} : () => scrollSlide(imageScrollTolLeft)
        }
        {...stylex.props(
          carouselStyle.button,
          isStartPosition
            ? carouselStyle.inactiveButtonBackground
            : carouselStyle.activeButtonBackground
        )}
      >
        ←
      </button>
      <div ref={ref} {...stylex.props(carouselStyle.carousel)}>
        {images.map((image, index) => {
          return <CarouselItem key={index} src={image.src} alt={image.alt} />;
        })}
      </div>
      <button
        onClick={isLastPosition ? () => {} : () => scrollSlide(imageMaxWidth)}
        {...stylex.props(
          carouselStyle.button,
          isLastPosition
            ? carouselStyle.inactiveButtonBackground
            : carouselStyle.activeButtonBackground
        )}
      >
        →
      </button>
    </div>
  );
};
