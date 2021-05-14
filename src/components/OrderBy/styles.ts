import styled from "styled-components";

export const Container = styled.details`
  position: relative;
  margin-right: 1em;
  z-index: 20;

  /* [open] {
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
  } */
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
`;

export const ArrowLabel = styled.label`
  .arrow {
    position: absolute;
    right: 8%;
    top: 30%;
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
`;

export const List = styled.ul`
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
`;

export const Label = styled.label`
  width: 100%;
  display: block;
  cursor: pointer;
  font-size: 0.8em;
  text-align: left;
`;
