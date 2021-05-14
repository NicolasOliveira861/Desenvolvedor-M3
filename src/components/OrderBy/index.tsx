import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import {
  Container,
  Summary,
  Option,
  List,
  Item,
  Label,
  ArrowLabel,
} from "./styles";

const OrderBy = () => {
  return (
    <Container>
      <Summary id="summary">
        <Option id="default" title="Ordenar por:" checked />
        <ArrowLabel htmlFor="summary">
          <IoIosArrowDown className="arrow" />
        </ArrowLabel>
        <Option id="item1" title="Mais recentes" />
        <Option id="item2" title="Menor preço" />
        <Option id="item3" title="Maior preço" />
      </Summary>
      <List>
        <Item>
          <Label htmlFor="item1">Mais Recentes</Label>
        </Item>

        <Item>
          <Label htmlFor="item2">Menor preço</Label>
        </Item>

        <Item>
          <Label htmlFor="item3">Maior preço</Label>
        </Item>
      </List>
    </Container>
  );
};

export default OrderBy;
