/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import media from "../styles/media"
import theme from "../styles/theme"
import Img from "gatsby-image"
import Live from "../svgs/live.js"
import Github from "../svgs/github.svg"

const StyledContainer = styled.section`
  padding: 120px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 900px;
  ${media.tablet`padding: 70px 0;`};
`

const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  li {
    margin-right: 1rem;
    font-family: Inconsolata;
    font-size: ${theme.fontSizes.sm};
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 0.25rem;
  color: #F5F1DA;
  // font-family: ${theme.fonts.Inconsolata};
  font-size: ${theme.fontSizes.l};
  text-align: right;
`

const StyledImage = styled(Img)`
  background: ${theme.colors.darkNavyEndLite};
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
`

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    padding: 0 0.5rem;
    padding-top: 0.25rem;
    color: red !important;
    svg {
      width: 20px;
      height: 20px;
    }
    path {
      fill: #f5f1da;
      &:hover {
        fill: ${theme.colors.lightYellow};
      }
    }
  }
`

const StyledDescription = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius};
  z-index: 4;
  padding: 10px;
  background-color: ${theme.colors.darkNavyEndLite};
  color: ${theme.colors.lightGrey};
  font-size: ${theme.fontSizes.md};
  box-shadow: 0 9px 15px -10px ${theme.colors.darkNavyEndLite};
  p {
    margin: 0;
    width: 100%;
  }
`

const StyledDetailsCard = styled.div`
  position: relative;
  grid-column: 1 / 8;
  grid-row: 1 / -1;
  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-color: ${theme.colors.darkNavyEndLite};
    transform: rotate(45deg);
    bottom: -85px;
    margin-left: 97.5%;
    position: relative;
    z-index: 6;
  }
`

const StyledImageContainer = styled.a`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  mix-blend-mode: multiply;
  border-radius: ${theme.radius + 1}px;
  ${media.tablet`height: 100%;`};
  ${media.tablet`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
`
const StyledProject = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 80px;
`

const Links = ({ github, live }) => {
  return (
    <StyledLinks>
      <a href={live} rel="noopener noreferrer" target="_blank">
        <Live width={20} height={20} />
      </a>
      <a href={github} rel="noopener noreferrer" target="_blank">
        <Github width={20} height={20} />
      </a>
    </StyledLinks>
  )
}

const Projects = ({ projects }) => {
  console.log(projects)
  return (
    <StyledContainer>
      {projects &&
        projects.map((project, index) => {
          const { title, tech, image, html, github, live } = project
          return (
            <StyledProject key={index}>
              <StyledDetailsCard>
                <StyledDescription>
                  <StyledTitle>{title}</StyledTitle>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <StyledBottom>
                      <Links github={github} live={live} />
                      <StyledList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </StyledList>
                    </StyledBottom>
                  )}
                </StyledDescription>
              </StyledDetailsCard>

              <StyledImageContainer fluid={image}>
                <StyledImage fluid={image} />
              </StyledImageContainer>
            </StyledProject>
          )
        })}
    </StyledContainer>
  )
}

export default Projects
