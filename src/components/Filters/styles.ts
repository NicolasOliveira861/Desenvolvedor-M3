import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.2em;
  letter-spacing: 0.1em;
  margin: 0 0 0.5em 0;
`;

export const SizeContainer = styled.div`
  margin-top: 3em;
`;

export const ItemsContainer = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.7em;
`;

export const SizeItem = styled.input``;

export const PriceContainer = styled.div`
  margin-top: 3em;
`;

export const PriceItem = styled.div``;
