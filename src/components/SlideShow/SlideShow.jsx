import React from "react";
import { Headline } from "../../styles/styles";
import CarouselComponent from "../Carousel/Carousel";

const SlideShow = () => {
  return (
    <div>
      <Headline>
        The thought and consideration we put into our products go well beyond
        desing.
      </Headline>
      <CarouselComponent />
    </div>
  );
};

export default SlideShow;
