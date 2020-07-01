import React from "react";

import Logo from "../../recources/Logo.png";
import {HeaderStl, Nav, NavButt, NavButtText, HeaderLogo} from '../../styles/styles'

const Header = () => {
  return (
    <HeaderStl>
      <div>
        <HeaderLogo src={Logo} alt="source" />
      </div>
      <Nav>
        <NavButtText>what we do</NavButtText>
        <NavButtText>our work</NavButtText>
        <NavButtText>about us</NavButtText>
        <NavButt>join us</NavButt>
      </Nav>
    </HeaderStl>
  );
};

export default Header;
