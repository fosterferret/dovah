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
    margin-top: 200px;
  }
`

const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  padding: 40px 40px 30px;
  z-index: 5;
  padding: 30px 25px 20px;
`

const StyledFeaturedImg = styled(Img)`
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  object-fit: cover;
  width: auto;
  height: 100%;
  filter: grayscale(100%) contrast(1) brightness(80%);
`

const StyledImgContainer = styled.a`
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: ${theme.colors.darkYellow};
  height: 100%;
  grid-column: 1 / -1;
  opacity: 0.25;
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background-color: ${theme.colors.darkNavyEnd};
    mix-blend-mode: screen;
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
  display: grid;
  min-height: 430px;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${StyledImgContainer} {
    grid-column: 1 / 8;
    height: 100%;
    grid-column: 1 / -1;
    opacity: 0.25;
  };

  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;
        grid-column: 1 / -1;
      ${media.phablet`padding: 30px 25px 20px;`};
    }

  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
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
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${theme.colors.darkNavyEnd};
  color: ${theme.colors.titleWhite};
  font-size: ${theme.fontSizes.md};
  border-radius: ${theme.borderRadius};
  background-color: transparent;
  padding: 20px 0;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
  p {
    margin: 0;
  }
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
    ["(max-width: 700px)", "(max-width: 1023px)"],
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
                const { title, html, xy, height, image, ...rest } = item
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
                    `@media (min-width: 1000px) {
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
                    <StyledProject>
                      <StyledContent>
                        <StyledDescription
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                        {/* <h3>{title}</h3>
                      <p>{paragraph}</p> */}
                      </StyledContent>
                      <StyledImgContainer
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <StyledFeaturedImg fluid={image} />
                      </StyledImgContainer>
                    </StyledProject>
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
