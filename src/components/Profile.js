/* eslint-disable react/display-name */
import React from 'react'
import ProfileIntro from './ProfileIntro'
import styled from "styled-components"
// import { mixins } from "../styles/shared-styles"
// import CustomSection from "./CustomSection"
import media from "../styles/media"
// import { generateSpace } from "../styles/shared-styles"

const Container = styled.section`
max-width: 68rem;
width: calc(100% - 9.25rem * 2);
margin: 11rem auto 5rem;
${media.pseudo`
  margin: 8rem auto 3rem;
  width: calc(100% - 11rem * 2);
`}

${media.phablet`
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 3rem 6rem;
`}

${media.mobile`
  margin: 2rem auto 0;
  padding: 0 2rem 6rem;
`}
`



export default () => {  
  return (
      <Container>
        <ProfileIntro 
          content={() =>
            <>
            <h3>QUIS SUM</h3>            
              <p>I was a kid first, a lover of elementary science and math next, and then a discrete tinkerer. I spent the first 15 years of my life poking around the insides of my parents' shelf stereo systems and Pentium 4 PC.</p>
            </>
          }
        />
      </Container>
  )
}
