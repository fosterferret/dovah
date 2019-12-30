import React from "react"
// import { Link } from "gatsby"
import useHero from "../hooks/use-hero"
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  const hero = useHero()
  console.log(hero)
  return (
    <Layout>
     
    </Layout>
  )
}

export default IndexPage
