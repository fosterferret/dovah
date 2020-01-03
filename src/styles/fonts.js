import { css } from "styled-components"
import FuturaPTLightWOFF from "../fonts/FuturaPT-Light.woff"
import FuturaPTLightWOFF2 from "../fonts/FuturaPT-Light.woff2"
import FuturaPTBookWOFF from "../fonts/FuturaPT-Book.woff"
import FuturaPTBookWOFF2 from "../fonts/FuturaPT-Book.woff2"
import FuturaPTMediumWOFF from "../fonts/FuturaPT-Medium.woff"
import FuturaPTMediumWOFF2 from "../fonts/FuturaPT-Medium.woff2"
import FuturaPTBoldWOFF from "../fonts/FuturaPT-Bold.woff"
import FuturaPTBoldWOFF2 from "../fonts/FuturaPT-Bold.woff2"
import FuturaPTHeavyWOFF from "../fonts/FuturaPT-Heavy.woff"
import FuturaPTHeavyWOFF2 from"../fonts/FuturaPT-Heavy.woff2"
import FuturaPTDemiWOFF from "../fonts/FuturaPT-Demi.woff"
import FuturaPTDemiWOFF2 from "../fonts/FuturaPT-Demi.woff2"
import FuturaPTLightOblWOFF from"../fonts/FuturaPT-LightObl.woff"
import FuturaPTLightOblWOFF2 from "../fonts/FuturaPT-LightObl.woff2"

export default css`
  @font-face {
    font-family: "Futura PT";
    src: url(${FuturaPTBookWOFF2}) format("woff2"),
      url(${FuturaPTBookWOFF}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-HeavyObl.woff2") format("woff2"),
      url("FuturaPT-HeavyObl.woff") format("woff");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url(${FuturaPTLightWOFF2} ) format("woff2"),
      url(${FuturaPTLightWOFF}) format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-ExtraBoldObl.woff2") format("woff2"),
      url("FuturaPT-ExtraBoldObl.woff") format("woff");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-BoldObl.woff2") format("woff2"),
      url("FuturaPT-BoldObl.woff") format("woff");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-DemiObl.woff2") format("woff2"),
      url("FuturaPT-DemiObl.woff") format("woff");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-MediumObl.woff2") format("woff2"),
      url("FuturaPT-MediumObl.woff") format("woff");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url(${FuturaPTDemiWOFF2}) format("woff2"),
      url(${FuturaPTDemiWOFF}) format("woff");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url(${FuturaPTLightOblWOFF2}) format("woff2"),
      url(${FuturaPTLightOblWOFF}) format("woff");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url(${FuturaPTHeavyWOFF2}) format("woff2"),
      url(${FuturaPTHeavyWOFF}) format("woff");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url(${FuturaPTBoldWOFF2}) format("woff2"),
      url(${FuturaPTBoldWOFF}) format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url(${FuturaPTMediumWOFF2}) format("woff2"),
      url(${FuturaPTMediumWOFF}) format("woff");
    font-weight: 500;
    font-style: normal;
  }
`
