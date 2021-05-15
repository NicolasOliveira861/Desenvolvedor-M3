import styled, { css } from "styled-components";

interface MobileFilter {
  isMobileOpen?: boolean;
  toggleGroup?: boolean;
}

export const Container = styled.div<MobileFilter>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    display: ${(props) => (props.isMobileOpen ? "flex" : "none")};
    width: 100%;
    min-height: 100vh;
    position: absolute;
    background: var(--white);
    top: 0;
    left: 0;
    z-index: 20;
  }

  @media screen and (max-width: 480px) {
    display: ${(props) => (props.isMobileOpen ? "flex" : "none")};
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    align-items: flex-start;
    justify-content: unset;
    position: absolute;
    background: var(--white);
    z-index: 20;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 80%;
    height: 100vh;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 30%;
  }
`;

export const ColorsContainer = styled.div`
  margin-bottom: -15%;

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin-bottom: -7%;
  }
`;

export const ColorItemsContainer = styled.div<MobileFilter>`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 0 2em;
  }

  @media screen and (max-width: 1024px) {
    ${(props) =>
      !props.toggleGroup &&
      css`
        display: none;
      `}
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin-left: 2em;
  }

  @media screen and (max-width: 480px) {
    margin-left: 2.7em;
  }
`;

export const FilterLabel = styled.div<MobileFilter>`
  font-size: 1.3em;
  letter-spacing: 0.1em;
  width: 100%;
  padding: ${(props) => (props.isMobileOpen ? "1em 1em" : "1em 1em")};
  border-bottom: 1px solid var(--grey);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const LabelText = styled.div`
  color: var(--darker-grey);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;

  > .icon {
    vertical-align: middle;
    transform: scale(1.6, 1.6);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 2em 0;
  position: absolute;
  bottom: 0;

  > button {
    font-size: 1em;
    font-weight: 300;
    width: 40%;
    padding: 8px 0;
    letter-spacing: 0.1em;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ApplyBtn = styled.button`
  background: var(--blue);
  color: var(--white);
  border: none;
`;

export const ClearBtn = styled.button`
  background: none;
  color: var(--light-black);
  border: 1px solid var(--light-black);
`;

export const Label = styled.div`
  padding: 1em 1.6em 1em 1.2em;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 1em 0;
  }
`;

export const Title = styled.p`
  font-size: 1.2em;
  letter-spacing: 0.1em;
`;

export const TitleBtn = styled.button`
  background: none;
  border: none;

  .dash {
    transform: scale(1.7);
    -o-transform: scale(1.7);
    -moz-transform: scale(1.7);
    -webkit-transform: scale(1.7);
    vertical-align: middle;
    transition: 0.2s;
  }

  .plus {
    vertical-align: middle;
    transform: scale(1.7);
  }

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const SizeContainer = styled.div`
  margin-top: 3em;
  margin-bottom: -15%;

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin-bottom: -7%;
  }
`;

export const ItemsContainer = styled.div<MobileFilter>`
  display: flex;
  margin-top: 1em;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.7em;
  position: relative;

  @media screen and (max-width: 1024px) {
    ${(props) =>
      !props.toggleGroup &&
      css`
        display: none;
      `}
  }

  @media screen and (min-width: 1025px) {
    padding: 0 0 0 2em;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin-left: 2em;
  }

  @media screen and (max-width: 480px) {
    margin-left: 2.7em;
    margin-bottom: 1em;
  }
`;

export const SizeItem = styled.input``;

export const PriceContainer = styled.div`
  position: relative;
  margin-top: 3em;
`;

export const PriceItemContainer = styled.div<MobileFilter>`
  @media screen and (min-width: 1024px) {
    padding: 0 2em;
  }

  @media screen and (max-width: 1024px) {
    ${(props) =>
      !props.toggleGroup &&
      css`
        display: none;
      `}
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin-left: 2em;
  }
  @media screen and (max-width: 480px) {
    margin-left: 2.7em;
  }
`;

export const PriceItem = styled.div``;
