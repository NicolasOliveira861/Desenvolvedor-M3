import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 4em;
  width: 100%;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const FiltersContainer = styled.div`
  @media screen and (min-width: 1024px) {
    flex-basis: 30%;
  }
`;

export const CatalogContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

export const CatalogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 0;
  width: 90%;

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 2.1em;
  color: var(--light-black);

  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 0.6em;
    font-size: 2.8em;
  }

  @media screen and (max-width: 480px) {
    margin: 0.3em 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;

  @media screen and (min-width: 1024px) {
    width: unset;
  }
`;

export const FilterButton = styled.button`
  background: none;
  border: 1px solid var(--darker-grey);
  display: flex;
  flex-basis: 50%;
  padding: 0.8em 0;
  justify-content: center;
  color: var(--darker-grey);
  font-size: 1.1em;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Catalog = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 3em;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 2em 0;
  }
`;

export const CatalogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 70%;
    width: unset;
  }
`;

export const FetchMoreBtn = styled.button`
  background: var(--blue);
  border: none;
  color: var(--white);
  padding: 12px 22px;
  font-weight: 600;
  cursor: pointer;
  margin: 2em 0;

  :hover {
    background: #6ae1ff;
  }

  @media screen and (max-width: 480px) {
    padding: 16px 22px;
    margin: 0 0 2em 0;
  }
`;

export const CatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 33%;
  padding: 0 1.2em;
  position: relative;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-basis: 50%;
  }

  @media screen and (max-width: 480px) {
    flex-basis: 50%;
    width: 50%;
    padding: 0 0.4em;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
`;

export const ItemTitle = styled.p`
  margin: 0.6em 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #212121;
  font-size: 1.1vw;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 70%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 3vw;
  }
`;

export const ItemPrice = styled.p`
  font-weight: bold;
  margin-bottom: 0.3em;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 2.4vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
`;

export const ItemInstallment = styled.p`
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
`;

export const BuyButton = styled.button`
  background: var(--black);
  color: var(--white);
  width: 100%;
  padding: 8px 0;
  border: none;
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1em;
  cursor: pointer;
  transition: 0.15s;
  -o-transition: 0.15s;
  -moz-transition: 0.15s;
  -webkit-transition: 0.15s;

  :hover {
    background: var(--light-black);
  }

  @media screen and (min-width: 1024px) {
    padding: 12px 0;
  }
`;
