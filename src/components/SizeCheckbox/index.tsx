import React, { useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
} from "./styles";

function SizeCheckbox({ label, name, value }: any) {
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
          <div className="insideLabel">{name}</div>
        </StyledCheckbox>
      </CheckboxContainer>
    </CheckboxLabel>
  );
}

export default SizeCheckbox;
