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
              <p>I wasn not always a software engineer. 
              I focus primarily on building, prototyping and implementing user interfaces that are usable and scalable for any web-based platform.{' '}
              <a href="https://dribbble.com/michelemazzucco" target="_blank" rel="noopener noreferrer">I enjoy experimenting</a>, <a href="https://github.com/michelemazzucco" target="_blank" rel="noopener noreferrer">building and trying</a> out new tools.</p>
              <p>Sometimes <a href="https://twitter.com/MicheleMazzucco" target="_blank" rel="noopener noreferrer">I tweet</a> and share photos on <a href="https://www.instagram.com/michele.mazzucco/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
            </>
          }
        />
      </Container>
  )
}
