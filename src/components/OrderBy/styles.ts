import styled from "styled-components";

interface OpenProps {
  isOpen?: boolean;
}

export const Container = styled.details`
  position: relative;
  z-index: 20;
  @media screen and (max-width: 900px) {
    position: unset;
  }

  [open] {
    z-index: 1;
  }

  [open] summary:before {
    content: "";
    display: block;
    width: 100vw;
    height: 100vh;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    border: 1px solid red;
  }

  @media screen and (max-width: 1024px) {
    flex-basis: 50%;
  }
`;

export const Summary = styled.summary`
  padding: 0.5em 3.2em 0.5em 0.8em;
  cursor: pointer;
  background: var(--white);
  border: 1px solid var(--darker-grey);
  list-style-type: none;
  counter-reset: radios;
  display: flex;
  align-items: center;
  justify-content: center;

  ::-webkit-details-marker {
    display: none;
  }

  :focus {
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.1em;
    border-left: none;
    height: 100%;
    padding: 0;
  }
`;

export const ArrowLabel = styled.label`
  .arrow {
    position: absolute;
    right: 8%;
    top: 30%;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

export const ListHeader = styled.div`
  border-bottom: 1px solid var(--grey);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1em 1em;

  @media screen and (min-width: 901px) {
    display: none;
  }
`;

export const Title = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    font-size: 1.3em;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--darker-grey);
    font-weight: 600;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  background: none;
  border: none;
  align-items: center;

  .icon {
    vertical-align: middle;
    transform: scale(1.6, 1.6);
  }

  @media screen and (min-width: 901px) {
    display: none;
  }
`;

export const Option = styled.input.attrs({
  type: "radio",
  name: "item",
})`
  counter-increment: radios;
  appearance: none;
  display: none;

  :checked {
    display: inline;
  }

  :after {
    content: attr(title);
    display: inline;
    font-size: 1em;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.1em;
    color: var(--darker-grey);
  }
`;

export const List = styled.ul<OpenProps>`
  width: 100%;
  background: var(--white);
  position: absolute;
  top: calc(100%);
  left: 0;
  margin: 0 0 0 0;
  box-sizing: border-box;
  max-height: 200px;
  overflow-y: auto;
  counter-reset: labels;
  list-style-type: none;

  @media screen and (max-width: 900px) {
    position: absolute;
    min-height: 100%;
    max-height: unset;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    left: 0;
    top: 0;
  }
`;

export const Item = styled.li`
  margin: 0;
  padding: 0.6em 0em 0.6em 0.8em;
  border-left: 1px solid var(--darker-grey);
  border-right: 1px solid var(--darker-grey);
  border-top: none;
  transition: background 0.1s, color 0.1s;

  :last-child {
    border-bottom: 1px solid var(--darker-grey);
  }

  :hover {
    background: var(--blue);
    color: var(--white);
    border: none;
  }

  @media screen and (max-width: 900px) {
    border: none;
    padding: 2em 2em 0em 2em;

    :last-child {
      border: none;
    }

    :hover {
      background: none;
      color: unset;
      border: none;
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  display: block;
  cursor: pointer;
  font-size: ${window.outerWidth < 900 ? "1.2em" : "0.8em"};
  text-align: left;
`;
