import styled from "styled-components"
import media from "./media"
import { css } from "styled-components"
import theme from "./theme"
const { colors, fontSizes, fonts } = theme

export const mixins = {
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  navList: css`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${colors.bookYellow};
      outline: 0;
    }
    text-decoration-skip-ink: auto;
    color: ${colors.darkGrey};
    cursor: pointer;
  `,


  bigButton: css`
    color: ${colors.darkYellow};
    background-color: transparent;
    border: 1px solid ${colors.darkYellow};
    border-radius: ${theme.borderRadius};
    padding: 0.9rem 1.55rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.FuturaPT};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      color: ${colors.hoverYellow};
    }
    &:after {
      display: none !important;
    }
  `,


  button: css`
    color: ${colors.darkYellow};
    background-color: transparent;
    border: 1px solid ${colors.darkYellow};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.FuturaPT};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.lightYellow};
    }
    &:after {
      display: none !important;
    }
  `,

  socialMediaList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.sm};
    li {
      position: relative;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${colors.darkYellow};
      }
    }
  `,
}


export const spaces = {
  lvl1: "5rem",
  lvl2: "4rem",
  lvl3: "3rem",
  lvl4: "2rem",
  lvl5: "1rem",
  lvl6: ".5rem",
  lvl7: ".25rem",
}

const rule = (label, value) => `${label}: ${value};`

export const generateSpace = padding =>
  css`
    ${rule(padding, spaces.lvl1)}
    ${media.tablet`
      ${rule(padding, spaces.lvl3)}
    `}
    ${media.phablet`
      ${rule(padding, spaces.lvl3)}
    `}
    ${media.mobile`
      ${rule(padding, spaces.lvl4)}
    `}
  `

export const Section = styled.section`
  margin: 0 auto;
 ${generateSpace('padding')};
  max-width: 900px;

  ${media.tablet`padding: 10px 20px;`};
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

