/* eslint-disable react/prop-types */
import React, { useState } from "react"
import styled from "styled-components"
import media from "../styles/media"
import theme from "../styles/theme"
import Img from "gatsby-image"
import Live from "../svgs/live.js"
import Github from "../svgs/github.svg"
import useMediaQuery from "../hooks/use-mq"
import useMeasure from "../hooks/use-measure"
import ClassNames from "classnames"

const StyledContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  ${media.tablet`padding: 70px 0;`};
  article {
    margin-top: 200px
  }
`
const StyledGrid = styled.div`
  margin-top: 50px;

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`

const StyledProjectInner = styled.div`
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.darkYellow};
`

const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
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

// const StyledDescription = styled.div`
//   position: relative;
//   border-radius: ${theme.borderRadius};
//   z-index: 4;
//   padding: 10px;
//   background-color: ${theme.colors.darkNavyEndLite};
//   color: ${theme.colors.lightGrey};
//   font-size: ${theme.fontSizes.md};
//   box-shadow: 0 9px 15px -10px ${theme.colors.darkNavyEndLite};
//   p {
//     margin: 0;
//     width: 100%;
//   }
// `

const StyledDescription = styled.div`
  font-size: 17px;
  color: ${theme.colors.textNavy};
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

  const [bind, { width }] = useMeasure()
  const columnCount = useMediaQuery(
    ["(max-width: 639px)", "(max-width: 1023px)"],
    [1, 2],
    3
  )

  const heights = new Array(columnCount).fill(0)

  const display = projects.map(item => {
    const { height } = item
    console.log(height)
    const column = heights.indexOf(Math.min(...heights))
    const xy = [
      (width / columnCount) * column,
      (heights[column] += Number(height)) - Number(height),
    ]

    return {
      ...item,
      xy,
      width: width / columnCount,
      height: Number(height),
    }
  })

  return (
    <StyledContainer>
      <article className="skills">
        <div className="grid-x">
          <div className="cell medium-12">
            <div
              {...bind}
              className="skills__content"
              style={{ height: Math.max(...heights) }}
            >
              {display.map((item, key) => {
                const { title, html, xy, height, ...rest } = item
                console.log(xy)

                const paragraph = html.replace(/(<([^>]+)>)/gi, "")

                // Translate
                const translate =
                  key <= 2
                    ? key * -Math.round(height / 3.6)
                    : (key - 2) * -Math.round(height / 3.6)

                // Styled
                const Item = styled.div(
                  val =>
                    `@media (min-width: 1024px) {
                margin-top: ${val.options.margin}px;
                transform: translateY(${val.options.translate}px) translate3d(${val.options.x}px,${val.options.y}px,0);
              }`
                )

                return (
                  <Item
                    key={name}
                    options={{
                      translate: translate.toString(),
                      margin: Math.round(height / 4).toString(),
                      x: Math.round(xy[0]).toString(),
                      y: Math.round(xy[1]).toString(),
                    }}
                    className="skills__item"
                    style={{ ...rest }}
                  >
                    <div className="skills__box">
                      <h3>{title}</h3>
                      <p>{paragraph}</p>
                    </div>
                  </Item>
                )
              })}
            </div>
          </div>
        </div>
      </article>
    </StyledContainer>

    //   <StyledGrid>
    //   {projects &&
    //     projects.map((project, index) => {
    //       const { title, tech, image, html, github, live } = project
    //       return (
    //         <StyledProject key={index}>
    //           <StyledProjectInner>
    //             <StyledDescription>
    //               <StyledTitle>{title}</StyledTitle>
    //               <div dangerouslySetInnerHTML={{ __html: html }} />
    //               {tech && (
    //                 <StyledBottom>
    //                   <Links github={github} live={live} />
    //                   <StyledList>
    //                     {tech.map((tech, i) => (
    //                       <li key={i}>{tech}</li>
    //                     ))}
    //                   </StyledList>
    //                 </StyledBottom>
    //               )}
    //             </StyledDescription>
    //           </StyledProjectInner>

    //           {/* <StyledImageContainer fluid={image}>
    //             <StyledImage fluid={image} />
    //           </StyledImageContainer> */}
    //         </StyledProject>
    //       )
    //     })}
    //     </StyledGrid>
    // </StyledContainer>
  )
}

export default Projects
