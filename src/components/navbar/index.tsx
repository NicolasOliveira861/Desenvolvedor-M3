import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { Container, Logo, Icon, Badge } from "./styles";

import logo from "../../assets/logo-m3.png";
import { NavbarProps } from "../../libs/storage";

const Navbar: React.FC<NavbarProps> = ({ cartNumber }) => {
  return (
    <Container>
      <Logo src={logo} />
      <Icon href="/">
        <GiShoppingBag className="shoppingBag" />
        <Badge>{cartNumber}</Badge>
      </Icon>
    </Container>
  );
};

export default Navbar;
