import styled from "styled-components";
import back from "../recources/background.png";
import circle3 from "../recources/Circle3.png";
import circle2 from "../recources/Circle2.png";
import circle1 from "../recources/Circle1.png";
import phone from "../recources/Phone.png";



export const AppStl = styled.div`
  max-width: 1340px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 1400px){
    max-width: 1220px;
  }

  @media (max-width: 1200px){
    max-width: 970px;
  }
  @media (max-width: 992px){
    max-width: 750px;
  }

  @media (max-width: 767px){
    max-width: 550px;
  }
`;


// Navigation Bar
export const HeaderStl = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 43px;

  @media (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.img`
  margin-left: 120px;
  @media (max-width: 767px) {
    margin: 20px auto;
  }
`;

export const Nav = styled.div`
  margin-right: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;
export const NavButtText = styled.div`
  margin: 12px;
  font-size: 12px;
  font-weight: bold;
  color: #5b6376;
  text-transform: uppercase;
  cursor: pointer;
`;

export const NavButt = styled.button`
  height: 40px;
  width: 135px;
  margin: 0 12px;
  border-radius: 20px;
  border: none;
  background-color: #71c8ec;
  text-transform: uppercase;
  color: #fff;
  align-self: flex-start;
  cursor: pointer;
`;
// Slide_Show

export const Headline = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 26px;
  /*    */
  margin: 0 auto;
  color: #474e5d;
  text-align: center;
`;
export const CarouselSlide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 50px 120px 0 120px;
  /* width: 80%; */
`;

export const SliderBlock = styled.div`
  :not(:hover) {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* width: 420px; */

    font-family: "Lato";
    color: #575859;
    opacity: 0.5;
  }

  &:hover {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* width: 420px; */

    font-family: "Lato";
    color: #575859;
    transition: ease-in 0.3s;
  }
`;

export const SliderBlockHeader = styled.div`
  margin: 8px 0;
  font-size: 20px;
  font-weight: bold;
`;
export const SliderBlockText = styled.div`
  margin: 10px 0;
  font-size: 17px;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const Img = styled.img`
  @media (max-width: 992px) {
    width: 250px;
  }
  @media (max-width: 767px){
    display: none;
  }
`;

export const SliderImg = styled.div`
  margin-right: 34px;
 
`;

export const SliderButt = styled.button`
  display: flex;
  border: none;
  background-color: #fff;
  height: 20px;
  color: #55bfea;
  font-family: "Lato";
  font-weight: bold;
  font-size: 15px;
  align-items: center;
  margin: 0 3px 50px 0;

  &:img {
    margin: 0 5px;
  }
`;
// What we do

export const WhatWeDo = styled.div`
  background-image: url(${circle1}), url(${circle2}), url(${circle3}),
    url(${back});
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: center center;
`;

export const AutoCarouselPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;

//Customers
export const Customers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  height: 150px;
`;

// Join us

export const JoinUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 347px;
`;

export const JoinUsH1 = styled.h1`
  font-size: 26px;
  font-family: "Lato";
  color: #474e5d;
  margin: 13px;
`;

export const JoinUsInput = styled.input`
  height: 19px;
  /* width: 419px; */
  border-radius: 50px;
  border: 2px solid #c0c0c0;
  font-size: 21px;
  color: #474e5d;
  padding: 18px;
  margin-top: 44px;
  outline: none;
`;

//Footer

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #575859;
  height: 38px;
  padding: 90px 0;
`;
