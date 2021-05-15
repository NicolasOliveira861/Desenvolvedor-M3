/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  CatalogHeader,
  Content,
  Title,
  CatalogContainer,
  Catalog,
  CatalogItem,
  ItemImage,
  ItemTitle,
  ItemPrice,
  ItemInstallment,
  BuyButton,
  FiltersContainer,
  FilterButton,
  Buttons,
  FetchMoreBtn,
  CatalogContent,
} from "./styles";
import Navbar from "../../components/navbar";
import Filters from "../../components/Filters";
import { PriceFormatter } from "../../components/PriceFormatter";
import api from "../../services/api";
import { DataProps } from "../../libs/storage";
import OrderBy from "../../components/OrderBy";

export default function Home(this: any) {
  const storedOrder = localStorage.getItem("PreviousOrder");
  const storedSort = localStorage.getItem("PreviousSort");

  const [allData, setAllData] = useState<DataProps[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState<string>(storedOrder ? storedOrder : "");
  const [sort, setSort] = useState<string>(storedSort ? storedSort : "id");
  const [cartNumber, setCartNumber] = useState(0);

  function handleOrder(orderValue: string, sortValue: string) {
    setOrder(orderValue);
    setSort(sortValue);
  }

  const ref = useRef<any>(null);

  const handleClick = () => {
    ref.current?.showFilters();
  };
  const itemsLimit = window.outerWidth < 900 ? 6 : 9;

  const limit = allData.length / itemsLimit;

  function handleFetchMore() {
    if (page <= limit) {
      setPage(page + 1);
      fetchData();
    }
  }

  async function fetchData() {
    const { data } = await api.get(
      `blouses?_sort=${sort}&_order=${order}&_page=${page}&_limit=${itemsLimit}`
    );

    if (page > 1) setAllData((oldValue) => [...oldValue, ...data]);
    else setAllData(data);

    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();

    localStorage.setItem("PreviousOrder", order);
    localStorage.setItem("PreviousSort", sort);
  }, [page, order, sort, cartNumber]);

  return (
    <Container>
      <Navbar cartNumber={cartNumber} />

      <Content>
        <CatalogHeader>
          <Title> Blusas </Title>
          <Buttons>
            <FilterButton type="button" onClick={handleClick}>
              Filtrar
            </FilterButton>
            <OrderBy handler={handleOrder} />
          </Buttons>
        </CatalogHeader>
        <CatalogContainer>
          <FiltersContainer>
            <Filters ref={ref} />
          </FiltersContainer>
          <CatalogContent>
            <Catalog>
              {allData.map((data) => (
                <CatalogItem key={data.id}>
                  <ItemImage src={data.photo} />
                  <ItemTitle>{data.name}</ItemTitle>
                  <ItemPrice>{PriceFormatter(data.price)}</ItemPrice>
                  <ItemInstallment>{data.installments}</ItemInstallment>
                  <BuyButton
                    type="button"
                    onClick={() => {
                      setCartNumber(cartNumber + 1);
                    }}
                  >
                    Comprar
                  </BuyButton>
                </CatalogItem>
              ))}
            </Catalog>

            <FetchMoreBtn onClick={() => handleFetchMore()}>
              {isLoading ? "CARREGANDO..." : "CARREGAR MAIS"}
            </FetchMoreBtn>
          </CatalogContent>
        </CatalogContainer>
      </Content>
    </Container>
  );
}
