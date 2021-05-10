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
  const storedFilter = localStorage.getItem("PrevFilter");

  const [allData] = useState(blouses);
  const [filteredData, setFilteredData] = useState(
    storedFilter !== null ? JSON.parse(storedFilter) : allData
  );

  function filtering() {
    const filtered = allData.filter((data) => data.id >= 1 && data.id <= 5);
    setFilteredData(filtered);
    localStorage.setItem("PrevFilter", JSON.stringify(filtered));
  }

  function removeFilter() {
    localStorage.removeItem("PrevFilter");
    setFilteredData(allData);
  }

  return (
    <Container>
      <Navbar />

      <Content>
        {/* <a href="#" onClick={() => filtering()}>
          Test
        </a>

        <a href="#" onClick={() => removeFilter()}>
          Clear
        </a> */}
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
            {filteredData.map((data: any) => (
              <CatalogItem key={data.id}>
                <ItemImage src={`${data.photo}`} />
                <ItemTitle>{data.name}</ItemTitle>
                <ItemPrice>{PriceFormatter(data.price)}</ItemPrice>
                <ItemInstallment>{data.installments}</ItemInstallment>
                <BuyButton type="button"> Comprar </BuyButton>
              </CatalogItem>
            ))}
          </Catalog>
        </CatalogContainer>
      </Content>
    </Container>
  );
}
