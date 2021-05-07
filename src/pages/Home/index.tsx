import React, { useState, useEffect } from "react";
import data from "../../services/server.json";
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

export default function Home() {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container>
      <Navbar />

      <CatalogContainer>
        <Filters />
        <Catalog>
          {data.blouses.map((data) => (
            <CatalogItem key={data.id}>
              <ItemImage src={image1} />
              <ItemTitle>{data.name}</ItemTitle>
              <ItemPrice>{formatter.format(data.price)}</ItemPrice>
              <ItemInstallment>{data.installments}</ItemInstallment>
              <BuyButton> Comprar </BuyButton>
            </CatalogItem>
          ))}
        </Catalog>
      </CatalogContainer>
    </Container>
  );
}
