import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', serif;

    --blue: #00c0ee;
    --darker-grey: #7a7a7a;
    --grey: #c7c7c7;
    --black: #222222;
    --light-black: #333333;
    --white: #ffffff;
  }

  body {
    background: var(--white);
  }
`;
