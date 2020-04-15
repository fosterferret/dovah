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
          }
        `
      : css`
          transform: rotate(90deg) translateX(50%);
          transform-origin: right;
          ${generateSpace("right")}
        `}

  ${media.tablet`
    display: flex;
    flex-direction: column;
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: .5rem 0 0;
    text-align: center;
    font-size: .8rem;
    // color:white;

    // &:nth-of-type(1) {
    //   color: ${theme.colors.darkYellow}
    // }
  `}
`

const SideFooter = () => (
  <Wrapper>
    <Sider
      orientation="left"
      className="double-underline"
      href={`mailto:notchera@gmail.com`}
    >
      NOTCHERA@GMAIL.COM
    </Sider>
    <Sider orientation="right" href={`https://drive.google.com/file/d/194sSscqYiursatIyZZKiP4kBnV9lSxkR/view?usp=sharing`}>DOWNLOAD MY RESUMÉ</Sider>
  </Wrapper>
)

export default SideFooter
