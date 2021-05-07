import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
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

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 4em;
  width: 100%;
`;

export const CatalogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 0;
  width: 90%;
`;

export const Title = styled.div`
  font-size: 2.1em;
  color: var(--light-black);
`;

export const OrderByButton = styled.select`
  border: 1px solid var(--black);
  border-radius: 0;
  padding: 0.6em;
  outline: none;
`;

export const Option = styled.option`
  border: 1px solid var(--black);
  border-radius: 0;
  padding: 0.6em;
`;

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
