import { stylex } from "@stylexjs/stylex";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";
import { carouselStyle } from "./index.stylex";
import { useRef } from "react";

type CarouselProps = {
  images: CarouselItemProps[];
};

export const Carousel = ({ images }: CarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollSlide = (direction: 300 | -300) => {
    ref.current?.scrollBy({ left: direction, behavior: "smooth" });
  };

  if (images.length === 0) return null;

  return (
    <div {...stylex.props(carouselStyle.base)}>
      <button
        onClick={() => scrollSlide(300)}
        {...stylex.props(carouselStyle.button)}
      >
        ←
      </button>
      <div ref={ref} {...stylex.props(carouselStyle.carousel)}>
        {images.map((image) => {
          return (
            <CarouselItem key={image.src} src={image.src} alt={image.alt} />
          );
        })}
      </div>
      <button
        onClick={() => scrollSlide(-300)}
        {...stylex.props(carouselStyle.button)}
      >
        →
      </button>
    </div>
  );
};
