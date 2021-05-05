import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { Container, Logo, Icon, Badge } from "./styles";

import logo from "../../assets/logo-m3.png";

export default function Navbar() {
  return (
    <Container>
      <Logo src={logo} />
      <Icon href="/">
        <GiShoppingBag className="shoppingBag" />
        <Badge>3</Badge>
      </Icon>
    </Container>
  );
}
