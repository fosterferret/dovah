/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { mixins } from "../styles/shared-styles"
import CustomSection from "./CustomSection"
import media from "../styles/media"
import theme from "../styles/theme"
import { generateSpace } from "../styles/shared-styles"

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`

const StyledProject = styled.div`

`

const Overlay = styled.div`
  background: linear-gradient(transparent, #191919, #000);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border-radius: 0 0 4px 4px;
`

const StyledContent = styled.div``

const Projects = ({ projects }) => {
  console.log(projects)
  return <div> mr </div>
}

export default Projects
