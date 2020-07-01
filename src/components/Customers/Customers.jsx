import React from "react";

import { Customers } from "../../styles/styles";
import customImg from "../../recources/Customers.png";

const CustomersComponents = () => {
  return (
    <Customers>
      <img src={customImg} style={{ width: "80%" }} />
    </Customers>
  );
};

export default CustomersComponents;
