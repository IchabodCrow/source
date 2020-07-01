import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { AppStl } from "./styles/styles";
import SlideShow from "./components/SlideShow/SlideShow";
import WhatWeDoComponent from "./components/WhatWeDo/WhatWeDo";
import CustomersComponents from "./components/Customers/Customers";
import JoinUsComponent from "./components/JoinUs/JoinUs";
import FooterComponent from "./components/Footer/Footer";

function App() {
  return (
    <AppStl>
      <Header />
      <SlideShow />
      <WhatWeDoComponent />
      <CustomersComponents />
      <JoinUsComponent />
      <FooterComponent />
    </AppStl>
  );
}

export default App;
