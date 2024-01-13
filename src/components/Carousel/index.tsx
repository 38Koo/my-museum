import { stylex } from "@stylexjs/stylex";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";
import { carouselStyle } from "./index.stylex";
import { useRef, useState } from "react";

type CarouselProps = {
  images: CarouselItemProps[];
};

export const Carousel = ({ images }: CarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isStartPosition, setIsStartPosition] = useState(true);
  const [isLastPosition, setIsLastPosition] = useState(false);

  const scrollSlide = (direction: 300 | -300) => {
    ref.current?.scrollBy({ left: direction, behavior: "smooth" });

    if (!ref.current) return;

    // FIXME: ここのロジックもっときれいにしたい
    if (direction === -300 && ref.current?.scrollLeft === 300) {
      setIsStartPosition(true);
      return;
    }

    if (
      direction === 300 &&
      ref.current?.scrollWidth - ref.current?.scrollLeft ===
        ref.current.clientWidth + 300
    ) {
      setIsLastPosition(true);
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
        onClick={isStartPosition ? () => {} : () => scrollSlide(-300)}
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
        onClick={isLastPosition ? () => {} : () => scrollSlide(300)}
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
