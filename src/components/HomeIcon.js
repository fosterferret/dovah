import React from "react"
import Link from "gatsby-link"
import Icon from "../svgs/home.svg"
import styled from "styled-components"
import { generateSpace } from "../styles/shared-styles"
// import { generateSpace } from '../styles/shared-styles'
import media from "../styles/media"

export const Wrapper = styled.div`
  max-width: 18rem;
  ${generateSpace("padding")}
  ${media.phablet`
  position: static;
  padding: 0;
  align-self: flex-end;
`}

  a,
  svg {
    display: block;
  }

  a {
    width: 1.65rem;
    ${media.tablet`
    width: 1.95rem;
    position: fixed;
    margin-top: -17px;
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
    <div>
      <Link to="/">
        <Icon />
      </Link>
    </div>
  </Wrapper>
)

export default HomeIcon
