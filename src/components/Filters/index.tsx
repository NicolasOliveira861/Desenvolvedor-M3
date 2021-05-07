import React from "react";
import Colors from "../../services/colors.json";
import {
  Container,
  ColorContainer,
  ColorTitle,
  ItemContainer,
  ColorItem,
  ColorLabel,
  SizeContainer,
  SizeTitle,
  SizeItem,
  PriceContainer,
  PriceTitle,
  PriceItem,
} from "./styles";

export default function Filters() {
  return (
    <Container>
      <ColorContainer>
        <ColorTitle> CORES </ColorTitle>

        {Colors.colors.map((color) => (
          <ItemContainer key={color.id}>
            <ColorItem type="checkbox" name={color.id} value={color.id} />
            <ColorLabel htmlFor={color.id}> {color.name} </ColorLabel>
          </ItemContainer>
        ))}
      </ColorContainer>
    </Container>
  );
}
