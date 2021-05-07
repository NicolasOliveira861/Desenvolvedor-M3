import React from "react";
import { colors, sizes, priceLimit } from "../../services/data.js";
import Checkbox from "../Checkbox";
import SizeCheckbox from "../SizeCheckbox";
import PricesCheckbox from "../PricesCheckbox";
import {
  Container,
  FiltersContainer,
  Title,
  SizeContainer,
  PriceContainer,
  PriceItem,
  ItemsContainer,
} from "./styles";

export default function Filters() {
  return (
    <Container>
      <FiltersContainer>
        <Title> CORES </Title>

        {colors.map((color) => (
          <Checkbox
            key={color.id}
            label={color.id}
            name={color.name}
            value={color.id}
          />
        ))}
        <SizeContainer>
          <Title> TAMANHOS </Title>
          <ItemsContainer>
            {sizes.map((size) => (
              <SizeCheckbox
                key={size.id}
                label={size.name}
                name={size.name}
                value={size.name}
              />
            ))}
          </ItemsContainer>
        </SizeContainer>
        <PriceContainer>
          <Title> FAIXA DE PREÇO </Title>
          {priceLimit.map((price) => (
            <PricesCheckbox
              key={price.id}
              price1={price.price1}
              price2={price.price2}
            />
          ))}
        </PriceContainer>
      </FiltersContainer>
    </Container>
  );
}
