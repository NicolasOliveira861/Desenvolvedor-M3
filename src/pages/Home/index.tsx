import React, {
  useState,
  useEffect,
  useImperativeHandle,
  useRef,
  ReactComponentElement,
} from "react";
import {
  Container,
  CatalogHeader,
  Content,
  OrderByButton,
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

export default function Home() {
  const storedFilter = localStorage.getItem("PrevFilter");

  const [allData, setAllData] = useState<DataProps[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(
    storedFilter !== null ? JSON.parse(storedFilter) : allData
  );

  const ref = useRef<any>(null);

  const handleClick = () => {
    ref.current?.showFilters();
  };

  function handleFetchMore() {
    setPage(page + 1);
    fetchData();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchData() {
    const { data } = await api.get(
      `blouses?_sort=id&_page=${page}&_limit=${window.outerWidth > 768 ? 9 : 6}`
    );

    if (page > 1) setAllData((oldValue) => [...oldValue, ...data]);
    else setAllData(data);

    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Container>
      <Navbar />

      <Content>
        <CatalogHeader>
          <Title> Blusas </Title>
          <Buttons>
            <FilterButton type="button" onClick={handleClick}>
              Filtrar
            </FilterButton>
            <OrderByButton>Ordenar</OrderByButton>
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
                  <BuyButton type="button"> Comprar </BuyButton>
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
