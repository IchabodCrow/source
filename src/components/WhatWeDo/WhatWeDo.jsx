import React from "react";
import { WhatWeDo, AutoCarouselPage } from "../../styles/styles";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import image from "../../recources/Image.png";

const WhatWeDoComponent = () => {
  return (
    <WhatWeDo>
      <Carousel
        style={styles}
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
      >
        <AutoCarouselPage>
          <div>
            <img src={image} />
          </div>
          <p
            style={{
              "font-size": 26,
              color: "#fff",
              "font-famify": "Lato",
              "font-weight": 300,
            }}
          >
            Why Source is awsome?
          </p>
          <p
            style={{
              "font-size": 18,
              color: "#fff",
              "font-famify": "Lato",
              "margin-bottom": 60,
            }}
          >
            Our workshop, methodologies, and practices help us confidently and
            collaboratively solve complex business challenges.
          </p>
        </AutoCarouselPage>
        <AutoCarouselPage>
          <div>
            <img src={image} />
          </div>
          <h1
            style={{
              "font-size": 26,
              color: "#fff",
              "font-famify": "Lato",
              "font-weight": "normal",
            }}
          >
            Why Source is awsome?
          </h1>
          <h2
            style={{
              "font-size": 18,
              color: "#fff",
              "font-famify": "Lato",
              "margin-bottom": 60,
            }}
          >
            Our workshop, methodologies, and practices help us confidently and
            collaboratively solve complex business challenges.
          </h2>
        </AutoCarouselPage>
        <AutoCarouselPage>
          <div>
            <img src={image} />
          </div>
          <p
            style={{
              "font-size": 26,
              color: "#fff",
              "font-famify": "Lato 300",
            }}
          >
            Why Source is awsome?
          </p>
          <p
            style={{
              "font-size": 18,
              color: "#fff",
              "font-famify": "Lato",
              "margin-bottom": 60,
            }}
          >
            Our workshop, methodologies, and practices help us confidently and
            collaboratively solve complex business challenges.
          </p>
        </AutoCarouselPage>
        <AutoCarouselPage>
          <div>
            <img src={image} />
          </div>
          <p
            style={{
              "font-size": 26,
              color: "#fff",
              "font-famify": "Lato 300",
            }}
          >
            Why Source is awsome?
          </p>
          <p
            style={{
              "font-size": 18,
              color: "#fff",
              "font-famify": "Lato",
              "margin-bottom": 60,
            }}
          >
            Our workshop, methodologies, and practices help us confidently and
            collaboratively solve complex business challenges.
          </p>
        </AutoCarouselPage>
        <AutoCarouselPage>
          <div>
            <img src={image} />
          </div>
          <p
            style={{
              "font-size": 26,
              color: "#fff",
              "font-famify": "Lato 300",
            }}
          >
            Why Source is awsome?
          </p>
          <p
            style={{
              "font-size": 18,
              color: "#fff",
              "font-famify": "Lato",
              "margin-bottom": 60,
            }}
          >
            Our workshop, methodologies, and practices help us confidently and
            collaboratively solve complex business challenges.
          </p>
        </AutoCarouselPage>
      </Carousel>
    </WhatWeDo>
  );
};

export default WhatWeDoComponent;
