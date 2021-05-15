import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoX } from "react-icons/go";

import {
  Container,
  Summary,
  Option,
  List,
  Item,
  Label,
  ArrowLabel,
  Title,
  ListHeader,
  CloseButton,
} from "./styles";
import { OrderProps } from "../../libs/storage";

const OrderBy: React.FC<OrderProps> = ({ handler }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container>
      <Summary id="summary">
        <Option
          id="default"
          title={`${window.outerWidth < 900 ? "Ordenar" : "Ordenar por:"}`}
          checked
        />
        <ArrowLabel htmlFor="summary">
          <IoIosArrowDown className="arrow" />
        </ArrowLabel>
        <Option id="item1" title="Mais recentes" />
        <Option id="item2" title="Menor preço" />
        <Option id="item3" title="Maior preço" />
      </Summary>
      <List isOpen={isOpen}>
        <ListHeader>
          <Title>ORDENAR</Title>
          <CloseButton
            onClick={() => {
              setIsOpen(!isOpen);
              window.location.reload();
            }}
          >
            <GoX className="icon" />
          </CloseButton>
        </ListHeader>
        <Item
          onClick={() => {
            handler("desc", "id");
            if (window.outerWidth < 900) window.location.reload();
          }}
        >
          <Label htmlFor="item1">Mais Recentes</Label>
        </Item>

        <Item
          onClick={() => {
            handler("asc", "price");
            if (window.outerWidth < 900) window.location.reload();
          }}
        >
          <Label htmlFor="item2">Menor preço</Label>
        </Item>

        <Item
          onClick={() => {
            handler("desc", "price");
            if (window.outerWidth < 900) window.location.reload();
          }}
        >
          <Label htmlFor="item3">Maior preço</Label>
        </Item>
      </List>
    </Container>
  );
};

export default OrderBy;
