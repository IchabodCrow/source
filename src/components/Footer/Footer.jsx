import React from "react";

import twit from "../../recources/Twitter.png";
import face from "../../recources/facebook.png";
import logo from "../../recources/logoGray.png";
import { Footer } from "../../styles/styles";

const FooterComponent = () => {
  return (
    <Footer>
      <div style={{ "font-family": "Lato", "font-size": 16, color: "#6f6f6f" }}>
        Copyright © 2015. Source, Inc.
      </div>
      <img src={logo} />
      <div>
        <img src={face} style={{ "margin-right": 23 }} />
        <img src={twit} />
      </div>
    </Footer>
  );
};

export default FooterComponent;
