import styled, { css } from "styled-components";

interface CheckboxProps {
  isChecked: boolean;
}

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 21%;
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
  width: 36px;
  height: 36px;
  border-radius: 0;
  border: 1px solid var(--grey);
  color: var(--grey);
  cursor: pointer;
  margin-right: 8px;

  :hover {
    border: 2px solid #a4edff;
  }

  :active {
    border: 2px solid var(--blue);
  }

  ${(props) =>
    props.isChecked &&
    css`
      border: 2px solid var(--blue);

      :hover {
        border: 2px solid var(--blue);
      }
    `}
`;
