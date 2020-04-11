/* eslint-disable react/prop-types */
import React from "react"
import Profile from "../components/Profile"
import Layout from "../components/layout"
import Logo from "../components/Logo.js"

const ThirdPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Logo/>
      <Profile />
    </Layout>
  )
}

export default ThirdPage
