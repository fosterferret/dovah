import React from "react"
import styled from "styled-components"
import Image from "./ProfileImage"
import media from "../styles/media"
import theme from "../styles/theme"
import { Loader } from "../styles/shared-styles"

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
  ${media.mobile`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
  `}
`

export const StyledImage = styled(Image)`
  grid-area: 1 / 4 / last-line / end;
  background: #1e2733;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    padding-top: 150%;
    display: block;
    ${media.mobile`
      padding-top: 100%;
    `}
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    mix-blend-mode: lighten;
    opacity: 0.1;
    display: block;
    object-fit: cover;
    ${media.mobile`
      opacity: .2;
    `}
  }

  ${media.mobile`
    grid-area: 1 / 1 / 1 / 1;
    &:before {
      padding-top: 100%;
    }
  `}
`


export const InfoWrapper = styled.header`
  grid-row: 2 / 4;
  grid-column: 1 / 6;
  z-index: 3;
  ${media.phablet`
    grid-column: 1 / 7;
  `}
  ${media.mobile`
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`

export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  h3 {
    font-family: ${theme.fonts.Inconsolata};
    color: ${theme.colors.darkYellow};
  }
  p {
      font-size: ${theme.fontSizes.md}
  }
  ${media.mobile`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: #fff;
    border-bottom: 1px dotted ${theme.colors.darkNavyEnd};

    &:hover {
      border-bottom-color: ${theme.colors.darkYellow};
    }
  }
`

// eslint-disable-next-line react/prop-types
const ProfileIntro = ({ content }) => (
  <Wrapper>
    <InfoWrapper>
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledImage
      src="images/profile/francis-portrait.jpg"
      alt="Francis Bulus"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
    //   sources={[{
    //     media: 'max-width: 40rem',
    //     srcset: [
    //       '/images/profile/michele-mazzucco-portrait-square.jpg 1x',
    //       '/images/profile/michele-mazzucco-portrait-square-2x.jpg 2x',
    //       '/images/profile/michele-mazzucco-portrait-square-3x.jpg 3x'
    //     ]
    //   },{
    //     srcset: [
    //       '/images/profile/michele-mazzucco-portrait.jpg 1x',
    //       '/images/profile/michele-mazzucco-portrait-2x.jpg 2x',
    //       '/images/profile/michele-mazzucco-portrait-3x.jpg 3x'
    //     ]       
    //   }]}
    />
  </Wrapper>
)

export default ProfileIntro
