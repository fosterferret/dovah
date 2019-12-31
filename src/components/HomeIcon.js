import React from "react"
import Link from "gatsby-link"
import Icon from "../svgs/home.svg"
import styled from "styled-components"
// import { generateSpace } from "../styles/shared-styles"
// import { generateSpace } from '../styles/shared-styles'
import media from "../styles/media"

export const Wrapper = styled.div`
  display: none;
  ${media.phablet`
  display: flex;
  align-self: flex-end;
`}

  a,
  svg {
    display: block;
  }

  a {
    width: 1.65rem;
    ${media.tablet`
    position: fixed;
    margin-top: -18px;
    width: 1.95rem;
  `}
  }
  svg {
    width: 100%;
    height: auto;
  }
  }
`

const HomeIcon = () => (
  <Wrapper>
    <Link to="/">
      <Icon />
    </Link>
  </Wrapper>
)

export default HomeIcon
