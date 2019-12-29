import { css } from "styled-components"

const screenSizesInPx = {
  xxl: 1280,
  xl: 1024,
  lg: 720,
  m: 480,
  s: 376,
  xs: 330,
}

const generateMediaQueries = () => {
  return Object.keys(screenSizesInPx).reduce((acc, screen) => {
    const em = screenSizesInPx[screen] / 16
    acc[screen] = (...args) => css`
      @media (max-width: ${em}em) {
        ${css(...args)};
      }
    `
    return acc
  }, {})
}

export default {
  preload:
    "https://fonts.googleapis.com/css?family=Inconsolata|La+Belle+Aurore&display=swap",
  colors: {
    darkNavyStart: "#1C3451",
    darkNavyEnd: "#16283C",
    darkYellow: "#E7CC3F",
    bookYellow: "#E5E5E5",
    darkGrey: "#798694",
    textNavy: "#1D344E",
  },
  fonts: {
    FuturaPT:
      "Futura PT Book, Montserrat, Roboto, -apple-system, system-ui, BlinkMacSystemFont",
    Inconsolata: "Inconsolata, Roboto Mono, Monaco, monospace",
    LaBelle: "La Belle Aurore, cursive",
  },
  media: generateMediaQueries(),

  fontSizes: {
    xs: "12px",
    sm: "15px",
    md: "18px",
    l: "20px",
    xl: "22px",
    xxl: "25px",
    ttl: "34px",
  },
}
