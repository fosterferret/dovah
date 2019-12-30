import { css } from "styled-components"

const screenSizesInPx = {
  large: 1280,
  desktop: 1024,
  tablet: 720,
  phablet: 480,
  mobile: 376,
  tiny: 330,
}

const media = () => {
  return Object.keys(screenSizesInPx).reduce((acc, screen) => {
    const emValue = screenSizesInPx[screen] / 16
    acc[screen] = (...args) => css`
      @media (max-width: ${emValue}em) {
        ${css(...args)};
      }
    `
    return acc
  }, {})
}

export default media();