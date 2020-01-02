import React from "react"
import media from "../styles/media"
import styled, { css } from "styled-components"
import { generateSpace } from "../styles/shared-styles"
import theme from "../styles/theme"

const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  top: 35%;
  ${media.tablet`
    position: static;
    padding-top: 1.5rem;
  `}
`

const Sider = styled.a`
  position: absolute;
  font-family: ${theme.fonts.Inconsolata};
  color: ${theme.colors.darkGrey};
  font-size: 0.9rem;
  line-height: 1em;
  ${props =>
    props.orientation === "left"
      ? css`
          transform: rotate(-90deg) translateX(-50%);
          transform-origin: left;
          ${generateSpace("left")}
        `
      : css`
          transform: rotate(90deg) translateX(50%);
          transform-origin: right;
          ${generateSpace("right")}
        `}

  ${media.tablet`
  display: block;
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: .5rem 0 0;
    text-align: center;
    font-size: .8rem;
  `}
`

const Footer = () => (
  <Wrapper>
    <Sider
      orientation="left"
      className="double-underline"
      href={`mailto:notchera@gmail.com`}
    >
      notchera@gmail.com
    </Sider>
    <Sider orientation="right">Poach my resume?</Sider>
  </Wrapper>
)

export default Footer
