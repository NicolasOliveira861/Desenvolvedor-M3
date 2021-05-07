import React, { useState, useEffect } from "react";
import { blouses } from "../../services/data.js";
import {
  Container,
  CatalogHeader,
  Content,
  OrderByButton,
  Option,
  Title,
  CatalogContainer,
  Catalog,
  CatalogItem,
  ItemImage,
  ItemTitle,
  ItemPrice,
  ItemInstallment,
  BuyButton,
} from "./styles";
import Navbar from "../../components/navbar";
import Filters from "../../components/Filters";
import { PriceFormatter } from "../../components/PriceFormatter";

export default function Home() {
  return (
    <Container>
      <Navbar />

      <Content>
        <CatalogHeader>
          <Title> Blusas </Title>
          <OrderByButton>
            <Option>Ordenar por:</Option>
            <Option>Mais recentes</Option>
            <Option>Menor preço</Option>
            <Option>Maior preço</Option>
          </OrderByButton>
        </CatalogHeader>
        <CatalogContainer>
          <Filters />
          <Catalog>
            {blouses.map((data) => (
              <CatalogItem key={data.id}>
                <ItemImage src={`${data.photo}`} />
                <ItemTitle>{data.name}</ItemTitle>
                <ItemPrice>{PriceFormatter(data.price)}</ItemPrice>
                <ItemInstallment>{data.installments}</ItemInstallment>
                <BuyButton> Comprar </BuyButton>
              </CatalogItem>
            ))}
          </Catalog>
        </CatalogContainer>
      </Content>
    </Container>
  );
}
