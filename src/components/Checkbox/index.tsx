import React, { useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
} from "./styles";

function Checkbox({ label, name, value }: any) {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxLabel htmlFor={label}>
      <CheckboxContainer>
        <HiddenCheckbox
          isChecked={checked}
          type="checkbox"
          name={name}
          value={value}
        />
        <StyledCheckbox
          isChecked={checked}
          onClick={() => {
            setChecked(!checked);
          }}
        >
          <div className="color" />
        </StyledCheckbox>
      </CheckboxContainer>

      {name}
    </CheckboxLabel>
  );
}
export default Checkbox;
