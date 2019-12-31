/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { Section, mixins } from "../styles/shared-styles"
import media from "../styles/media"
import theme from "../styles/theme"
import Div100vh from "react-div-100vh"
import { generateSpace } from "../styles/shared-styles"

const Wrapper = styled(Div100vh)`
  ${mixins.flexCenter};
  margin: 0 auto;
  ${generateSpace("padding")};
  max-width: 900px;

  ${media.tablet`padding: 10px 20px;`};
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
`

const StyledIntro = styled.div`
  color: ${theme.colors.darkYellow};
  font-size: ${theme.fontSizes.xl};
  font-weight: normal;
  margin: 0 0 20px 0px;
`

const StyledTitle = styled.h2`
  font-size: 45px;
  color: ${theme.colors.titleWhite};
  line-height: 1.1;
  span {
    color: ${theme.colors.darkYellow};
  }
  margin: 0;
  ${media.tablet`font-size: 35px;`};
  ${media.mobile`font-size: 28px;`};
`

const StyledDescription = styled.div`
  margin-top: 25px;
  width: 100%;
  max-width: 600px;
  font-size: ${theme.fontSizes.s};
  font-family: ${theme.fonts.FuturaPT};
  font-weight: 300;
  color: #f0f2e9;
`

const Hero = ({ data }) => {
  const { frontmatter, html } = data
  return (
    <Wrapper as="section">
      <StyledIntro>{frontmatter.title}</StyledIntro>
      <StyledTitle>
        {frontmatter.name}
        <span>.</span>
      </StyledTitle>
      <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
  )
}

export default Hero
