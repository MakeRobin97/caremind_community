import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}

  @font-face {
    font-family: "Gotham Pro";
    src: url("/fonts/GothamPro-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Gotham Pro";
    src: url("/fonts/GothamPro.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Gotham Pro";
    src: url("/fonts/GothamPro-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Gotham Pro";
    src: url("/fonts/GothamPro-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

`;

export default GlobalStyle;
