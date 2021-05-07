import React, { useState, useEffect } from "react";
import { blouses } from "../../services/data.js";
import {
  Container,
  OrderByButton,
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
import image1 from "../../assets/img_2.png";
import { PriceFormatter } from "../../components/PriceFormatter";

export default function Home() {
  return (
    <Container>
      <Navbar />

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
    </Container>
  );
}
