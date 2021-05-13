import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', serif;

    --blue: #00c0ee;
    --darker-grey: #6F6F6F;
    --grey: #c7c7c7;
    --black: #000;
    --light-black: #333333;
    --white: #ffffff;
  }

  body {
    background: var(--white);
  }
`;
