import React, { useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
} from "./styles";
import { PriceFormatter } from "../PriceFormatter";

function PricesCheckbox({ label, price1, price2 }: any) {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxLabel htmlFor={label}>
      <CheckboxContainer>
        <HiddenCheckbox
          isChecked={checked}
          type="checkbox"
          name={price1 + "-" + price2}
          value={price1 + "-" + price2}
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

      {price1 !== ""
        ? "de " +
          PriceFormatter(price1).replace(/\s+/g, "").trim() +
          " até " +
          PriceFormatter(price2).replace(/\s+/g, "").trim()
        : "a partir de " + PriceFormatter(price2).replace(/\s+/g, "").trim()}
    </CheckboxLabel>
  );
}

export default PricesCheckbox;
