import styled, { createGlobalStyle } from "styled-components";
import { themed } from "styles/theme/theme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; // 1 rem/em = 10px
    background-color: white;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export { createGlobalStyle };

export const themes = {
  default: {
    ...themed.default,
  },
};

export const Content = styled.div`
  margin: 3rem auto;
`;
