/* eslint-disable react/prop-types */
import React from "react"
// import { Link } from "gatsby"
import Projects from "../components/Projects"
import useProjects from "../hooks/use-projects"
import Layout from "../components/layout"
// import SEO from "../components/seo"

const SecondPage = ({ location }) => {
  const projects = useProjects()
  console.log(projects)
  return (
    <Layout location={location}>
      <Projects projects={projects} />
    </Layout>
  )
}

export default SecondPage
