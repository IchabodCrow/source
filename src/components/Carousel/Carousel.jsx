import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  CarouselSlide,
  SliderBlock,
  SliderImg,
  SliderBlockHeader,
  SliderBlockText,
  SliderButt,
  Img,
} from "../../styles/styles";
import phone from "../../recources/Phone.png";
import humans from "../../recources/humans.png";
import light from "../../recources/light.png";
import statistics from "../../recources/statistics.png";
import blueButt from "../../recources/blueButt.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselComponent = () => {
  return (
    <Carousel responsive={responsive} infinite>
      <CarouselSlide>
        <div>
          <Img src={phone} />
        </div>
        <div>
          <SliderBlock>
            <SliderImg>
              <img src={humans} />
            </SliderImg>

            <div>
              <SliderBlockHeader> Community </SliderBlockHeader>
              <SliderBlockText>
                More than <b>2 million people</b> use products built by the
                Source community.
              </SliderBlockText>
              <SliderButt>
                {" "}
                <img src={blueButt} style={{ "margin-right": 5 }} /> Get
                Involved{" "}
              </SliderButt>
            </div>
          </SliderBlock>
          <SliderBlock>
            <SliderImg>
              <img src={light} />
            </SliderImg>

            <div>
              <SliderBlockHeader> Design & Performance </SliderBlockHeader>
              <SliderBlockText>
                Creating an entirely new design meant inventing an entirely new
                techonology with a level of precision you’d excepet.
              </SliderBlockText>
              <SliderButt>
                {" "}
                <img src={blueButt} style={{ "margin-right": 5 }} /> Inprove
                Source.com{" "}
              </SliderButt>
            </div>
          </SliderBlock>
          <SliderBlock>
            <SliderImg>
              <img src={statistics} />
            </SliderImg>

            <div>
              <SliderBlockHeader> Accurate results </SliderBlockHeader>
              <SliderBlockText>
                We give you - easy to understand, real time data on your
                smarthphone.
              </SliderBlockText>
              <SliderButt>
                {" "}
                <img src={blueButt} style={{ "margin-right": 5 }} /> Tweak
                Setting{" "}
              </SliderButt>
            </div>
          </SliderBlock>
        </div>
      </CarouselSlide>
    </Carousel>
  );
};

export default CarouselComponent;
