/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../styles/global"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Navigation from "../components/Navigation"
import Head from './Head'

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head/>
      <main>{children}</main>
      <Navigation location={location} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
