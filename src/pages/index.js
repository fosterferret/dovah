import React from "react"
// import { Link } from "gatsby"
import useHero from "../hooks/use-hero"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Logo from "../components/Logo.js"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  const hero = useHero()
  console.log(hero)
  return (
    <Layout>
      <Logo/>
      <Hero data={hero} />
    </Layout>
  )
}

export default IndexPage
