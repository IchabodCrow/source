import React from "react";

import { JoinUs, JoinUsH1, JoinUsInput } from "../../styles/styles";
import shadow from "../../recources/shadow.png";

const JoinUsComponent = () => {
  return (
    <JoinUs>
      <JoinUsH1 style={{ "font-weight": "normal" }}>Our Newsletter</JoinUsH1>
      <JoinUsH1>It is for me? Source is used by over 1.000 users</JoinUsH1>
      <JoinUsInput placeholder="Your email" />
      <img style={{ "margin-top": 21 }} src={shadow} />
    </JoinUs>
  );
};

export default JoinUsComponent;
