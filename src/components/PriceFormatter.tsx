import React from "react";

export function PriceFormatter(number: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const newValue = formatter.format(number);

  return newValue;
}
