export interface DataProps {
  id: number;
  name: string;
  price: number;
  installments: string;
  number: [string];
  color: string;
  photo: string;
}

export interface ColorsProps {
  id: number;
  name: string;
}

export interface SizesProps {
  id: number;
  name: string;
}

export interface PricesProps {
  id: number;
  price1: number;
  price2: number;
}

export interface OrderProps {
  handler: (orderValue: string, sortValue: string) => void;
}

export interface NavbarProps {
  cartNumber: number;
}
