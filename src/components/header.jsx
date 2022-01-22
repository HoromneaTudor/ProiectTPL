import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FirstSlideCarousel } from "./firstSlideCarousel";
import { SecondSlideCarousel } from "./secondSlideCarousel";
import { ThirdSlideCarousel } from "./thirdSlideCarousel";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1999, min: 576 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const Header = (props) => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      slidesToSlide={2}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={1100}
      arrows={true}
      itemClass="react-carousel-item "
    >
      <FirstSlideCarousel {...props}></FirstSlideCarousel>
      <SecondSlideCarousel {...props}></SecondSlideCarousel>
      <ThirdSlideCarousel {...props}></ThirdSlideCarousel>
    </Carousel>
  );
};
