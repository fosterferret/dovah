import { createGlobalStyle } from "styled-components"
import theme from "./theme"
import media from "./media"
import reset from "styled-reset"
import LocalFonts from "./fonts"
const { colors, fontSizes, fonts } = theme

export default createGlobalStyle`
  ${reset}
  ${LocalFonts}
  * {
    box-sizing: border-box;
    line-height: 1.3em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    width: 100%;
    height: 100%;
    font-size: ${fontSizes.md} 
    ${media.xl`
      font-size: 14px;
    `}
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  body {
    background-color: ${colors.darkNavyStart};
    width: 100%;
    min-height: 100%;
    color: #fff;
    font-family: ${fonts.FuturaPT};
    backface-visibility: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    
    &:hover {
      color: #fff;
    }
  }
`
