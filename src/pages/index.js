/* eslint-disable react/prop-types */
import React from "react"
import useHero from "../hooks/use-hero"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Logo from "../components/Logo.js"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ({location}) => {
  const hero = useHero()
  console.log(hero)
  return (
    <Layout location={location}>
      <Logo/>
      <Hero data={hero} />
    </Layout>
  )
}

export default IndexPage
