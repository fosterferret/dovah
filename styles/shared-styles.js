import { css } from "styled-components"
import theme from "./theme"
const { colors, fontSizes, fonts } = theme

export default {
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
