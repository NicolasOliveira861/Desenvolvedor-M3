export const sizes = [
  {
    id: 1,
    name: "P",
  },

  {
    id: 2,
    name: "M",
  },

  {
    id: 3,
    name: "G",
  },

  {
    id: 4,
    name: "GG",
  },

  {
    id: 5,
    name: "U",
  },

  {
    id: 6,
    name: "36",
  },

  {
    id: 7,
    name: "38",
  },

  {
    id: 8,
    name: "40",
  },

  {
    id: 9,
    name: "42",
  },

  {
    id: 10,
    name: "44",
  },

  {
    id: 11,
    name: "46",
  },
];

export const colors = [
  {
    id: "yellow",
    name: "Amarelo",
  },

  {
    id: "blue",
    name: "Azul",
  },

  {
    id: "white",
    name: "Branco",
  },

  {
    id: "gray",
    name: "Cinza",
  },

  {
    id: "orange",
    name: "Laranja",
  },

  {
    id: "green",
    name: "Verde",
  },

  {
    id: "red",
    name: "Vermelho",
  },

  {
    id: "black",
    name: "Preto",
  },

  {
    id: "pink",
    name: "Rosa",
  },

  {
    id: "burgundy",
    name: "Vinho",
  },
];

export const blouses = [
  {
    id: 1,
    name: "Camiseta Mescla",
    price: 28.0,
    installments: "até 3x de R$9,33",
    number: ["P", "M", "G", "38", "40"],
    color: "gray",
    photo: require("../assets/img_2.png").default,
  },

  {
    id: 2,
    name: "Saia em Couro",
    price: 398.0,
    installments: "até 5x de R$79,60",
    number: ["P", "G", "38", "44"],
    color: "black",
    photo: require("../assets/img_3.png").default,
  },

  {
    id: 3,
    name: "Cardigan Tigre",
    price: 398.0,
    installments: "até 5x de R$79,60",
    number: ["U"],
    color: "orange",
    photo: require("../assets/img_4.png").default,
  },

  {
    id: 4,
    name: "Cardigan Off White",
    price: 99.9,
    installments: "até 3x de R$33,30",
    number: ["G"],
    color: "white",
    photo: require("../assets/img_5.png").default,
  },

  {
    id: 5,
    name: "Body Leopardo",
    price: 129.9,
    installments: "até 3x de R$43,30",
    number: ["P", "M", "G", "GG", "36", "38", "40", "42", "44"],
    color: "orange",
    photo: require("../assets/img_6.png").default,
  },

  {
    id: 6,
    name: "Casaco Pelos",
    price: 398.0,
    installments: "até 5x de R$79,60",
    number: ["P", "M", "G", "38", "40"],
    color: "pink",
    photo: require("../assets/img_7.png").default,
  },

  {
    id: 7,
    name: "Cropped Stripes",
    price: 120.0,
    installments: "até 3x de R$40,00",
    number: ["P", "M", "36", "44"],
    color: ["orange", "blue", "yellow", "green"],
    photo: require("../assets/img_8.png").default,
  },

  {
    id: 8,
    name: "Camisa Transparente",
    price: 398.0,
    installments: "até 5x de R$79,60",
    number: ["P", "M", "G", "38", "40"],
    color: "black",
    photo: require("../assets/img_9.png").default,
  },

  {
    id: 9,
    name: "Pochete Clutch",
    price: 99.0,
    installments: "até 3x de R$33,00",
    number: ["P", "M", "G", "38", "40"],
    color: "black",
    photo: require("../assets/img_10.png").default,
  },
];

export const priceLimit = [
  {
    id: 1,
    price1: 0,
    price2: 50,
  },

  {
    id: 2,
    price1: 51,
    price2: 150,
  },

  {
    id: 3,
    price1: 151,
    price2: 300,
  },

  {
    id: 4,
    price1: 301,
    price2: 500,
  },

  {
    id: 5,
    price1: "",
    price2: 501,
  },
];
