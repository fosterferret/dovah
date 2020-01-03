import React from "react"
import Helmet from "react-helmet"

const Head = () => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      Francis Bulus | Software Developer
    </title>
    <link rel="canonical" href="https://francisbulus.com" />
    <link
      rel="preload"
      as="font"
      href="src/fonts/FuturaPT-Book.woff2"
      type="font/woff2"
      crossOrigin="anonymous"
    ></link>
    <link
      rel="preload"
      as="font"
      href="src/fonts/FuturaPT-Book.woff"
      type="font/woff"
      crossOrigin="anonymous"
    ></link>
  </Helmet>
)

export default Head
