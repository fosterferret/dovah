import { css } from "styled-components"

const screenSizesInPx = {
  xxl: 1280,
  xl: 1024,
  lg: 720,
  m: 480,
  s: 376,
  xs: 330,
}

const media = () => {
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

export default media;