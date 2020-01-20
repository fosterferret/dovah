/* eslint-disable react/prop-types */
import React from "react"
// import { Link } from "gatsby"
import Projects from "../components/Projects"
import useProjects from "../hooks/use-projects"
import Layout from "../components/layout"
import Logo from "../components/Logo.js"
// import SEO from "../components/seo"

const SecondPage = ({ location }) => {
  const projects = useProjects()
  console.log(projects)
  return (
    <Layout location={location}>
      <Logo/>
      <Projects projects={projects} />
    </Layout>
  )
}

export default SecondPage
