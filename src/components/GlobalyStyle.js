import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
    @media screen and (max-width: 350px) {
      font-size: 12px;
    }
  }
`;

export default GlobalStyle;