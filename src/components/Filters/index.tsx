import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { GoPlus, GoDash, GoX } from "react-icons/go";
import Checkbox from "../Checkbox";
import SizeCheckbox from "../SizeCheckbox";
import PricesCheckbox from "../PricesCheckbox";
import {
  Container,
  FiltersContainer,
  ColorsContainer,
  Title,
  SizeContainer,
  PriceContainer,
  Label,
  ItemsContainer,
  ColorItemsContainer,
  FilterLabel,
  Buttons,
  ClearBtn,
  ApplyBtn,
  TitleBtn,
  PriceItemContainer,
  LabelText,
  CloseButton,
} from "./styles";
import api from "../../services/api";
import { ColorsProps, PricesProps, SizesProps } from "../../libs/storage.js";

const Filters = forwardRef((props, ref) => {
  const [colors, setColors] = useState<ColorsProps[]>([]);
  const [sizes, setSizes] = useState<SizesProps[]>([]);
  const [prices, setPrices] = useState<PricesProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [toggleColors, setToggleColors] = useState(false);
  const [toggleSizes, setToggleSizes] = useState(false);
  const [togglePrices, setTogglePrices] = useState(false);

  async function fetchColors() {
    const { data } = await api.get("colors");
    setColors(data);
  }

  async function fetchSizes() {
    const { data } = await api.get("sizes");
    setSizes(data);
  }

  async function fetchPrices() {
    const { data } = await api.get("priceLimit");
    setPrices(data);
  }

  const ShowFilters = () => {
    setIsOpen(true);
  };

  const HideFilters = () => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => {
    return {
      showFilters: ShowFilters,
    };
  });

  useEffect(() => {
    fetchColors();
    fetchSizes();
    fetchPrices();
  }, [toggleColors, toggleSizes, togglePrices]);

  return (
    <Container isMobileOpen={isOpen}>
      <FilterLabel isMobileOpen={isOpen}>
        <LabelText>FILTRAR</LabelText>
        <CloseButton onClick={HideFilters}>
          <GoX className="icon" />
        </CloseButton>
      </FilterLabel>
      <FiltersContainer>
        <ColorsContainer>
          <Label>
            <Title> CORES </Title>
            <TitleBtn onClick={() => setToggleColors(!toggleColors)}>
              {toggleColors ? (
                <GoDash className="dash" />
              ) : (
                <GoPlus className="plus" />
              )}
            </TitleBtn>
          </Label>
          <ColorItemsContainer toggleGroup={toggleColors}>
            {colors.map((color) => (
              <Checkbox
                key={color.id}
                label={color.id}
                name={color.name}
                value={color.id}
              />
            ))}
          </ColorItemsContainer>
        </ColorsContainer>
        <SizeContainer>
          <Label>
            <Title> TAMANHOS </Title>
            <TitleBtn
              onClick={() => {
                setToggleSizes(!toggleSizes);
              }}
            >
              {toggleSizes ? (
                <GoDash className="dash" />
              ) : (
                <GoPlus className="plus" />
              )}
            </TitleBtn>
          </Label>
          <ItemsContainer toggleGroup={toggleSizes}>
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
          <Label>
            <Title> FAIXA DE PREÇO </Title>
            <TitleBtn onClick={() => setTogglePrices(!togglePrices)}>
              {togglePrices ? (
                <GoDash className="dash" />
              ) : (
                <GoPlus className="plus" />
              )}
            </TitleBtn>
          </Label>
          <PriceItemContainer toggleGroup={togglePrices}>
            {prices.map((price) => (
              <PricesCheckbox
                key={price.id}
                price1={price.price1}
                price2={price.price2}
              />
            ))}
          </PriceItemContainer>
        </PriceContainer>
      </FiltersContainer>
      <Buttons>
        <ApplyBtn>APLICAR</ApplyBtn>
        <ClearBtn>LIMPAR</ClearBtn>
      </Buttons>
    </Container>
  );
});

export default Filters;
