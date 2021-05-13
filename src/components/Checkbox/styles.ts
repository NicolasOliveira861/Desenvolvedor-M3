import styled, { css } from "styled-components";

interface CheckboxProps {
  isChecked: boolean;
}

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.4em;

  @media screen and (max-width: 480px) {
    margin-bottom: 1.1em;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})<CheckboxProps>`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1em;
  height: 1em;
  border-radius: 0;
  border: 1px solid var(--darker-grey);
  cursor: pointer;
  margin-right: 8px;

  :hover {
    .color {
      background: #a4edff;
      display: inline-block;
    }
  }

  :active {
    .color {
      background: var(--blue);
    }
  }

  .color {
    background: var(--blue);
    display: none;
    width: 75%;
    height: 70%;
  }

  ${(props) =>
    props.isChecked &&
    css`
      .color {
        display: flex;
      }

      :hover {
        .color {
          background: var(--blue);
          display: flex;
        }
      }
    `}

  @media screen and (max-width: 480px) {
    margin-right: 16px;
  }
`;
