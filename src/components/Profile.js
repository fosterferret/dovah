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
  margin-top: 8rem !important;
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
              <p>Long before I became a <span>fullstack developer</span>, I was a kid first, a lover of math next, and then a tinkerer. I spent the first 15 years of my life fiddling with parts from my parents&apos; stereo systems and Pentium 4 PC.
              I went on to give up my makeshift screwdrivers for Sequencing Electrophoresis Systems at the university as a Biochemist and Geneticist. 
              </p>
              <p>After that, I worked as a managing editor at a tech publication and then a social impact operations lead at a startup. Realizing at some point that
                I had unfinished business with breaking things apart and putting them back together (but I had clumsy hands now), I decided to become a Software Engineer. 
              </p>
              <p>
              I applied and got into Lambda School in August, 2019. I now spend my days eating too-saucy chicken wings while building highy scalable tools for the web with <span>Javascript (Vanilla, Node, React), Python, GraphQL, SQL, Postgres, MongoDB, Firebase, Go, HTML, CSS, and AWS.</span>
              </p>
              <p>And when I&apos;m not building things, <a href="https://twitter.com/AuxiNom" target="_blank" rel="noopener noreferrer">I&apos;m usually talking about video games, software, books, and Batman on my Twitter.</a></p>
            </>
          }
        />
      </Container>
  )
}
