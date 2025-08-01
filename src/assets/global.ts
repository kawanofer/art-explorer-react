import { createGlobalStyle } from "styled-components";

import theme from "./theme/CustomTheme";

import "react-perfect-scrollbar/dist/css/styles.css";

export default createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-box-sizing:border-box;
      -moz-box-sizing:border-box;
        box-sizing:border-box;
  }

  body {
    background: ${theme.white};
    color: ${theme.textPrimary};
    font-size: 14px;
    font-family: ${theme.fontFamily};
    -webkit-font-smoothing: antialiased !important;
  }

  html,
  body,
  #root {
    height: 100%;
  }


  body, input, button {
    font-family: ${theme.fontFamily};
  }

  a {
    text-decoration: none;
    color: #06c;
  }

  ul {
    list-style: inside;
  }
}
`;
