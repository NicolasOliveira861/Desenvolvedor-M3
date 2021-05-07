import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const CatalogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Catalog = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 1em;
`;

export const OrderByButton = styled.button``;

export const CatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 33%;
  padding: 0 1.4em;
`;

export const ItemImage = styled.img``;

export const ItemTitle = styled.p`
  margin: 0.6em 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #212121;
`;

export const ItemPrice = styled.p`
  font-weight: bold;
  margin-bottom: 0.3em;
`;

export const ItemInstallment = styled.p``;

export const BuyButton = styled.button`
  background: var(--black);
  color: var(--white);
  width: 100%;
  padding: 12px 0;
  border: none;
  font-size: 1.1em;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1em;
`;
