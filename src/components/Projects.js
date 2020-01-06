/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import media from "../styles/media"
import theme from "../styles/theme"
// import { generateSpace } from "../styles/shared-styles"
import Img from "gatsby-image"

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
  color: ${theme.colors.bookYellow};
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
  grid-column: 1 / 7;
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
  background-color: ${theme.colors.darkYellow};
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
  margin-bottom: 100px;
`

const Projects = ({ projects }) => {
  console.log(projects)
  return (
    <StyledContainer>
        {projects &&
          projects.map((project, index) => {
            const { title, tech, image, html } = project
            return (
              <StyledProject key={index}>
                <StyledDetailsCard>
                  <StyledDescription>
                    <StyledTitle>{title}</StyledTitle>
                    <p dangerouslySetInnerHTML={{ __html: html }} />
                    {tech && (
                      <StyledList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </StyledList>
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
