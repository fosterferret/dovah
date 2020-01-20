import React from "react"
import Tally from "../svgs/logo.svg"
// import theme from "../styles/theme"

const Logo = () => (
  <header style={{ display: "flex", justifyContent: "center" }}>
    {" "}
    <Tally
      width={100}
      height={52}
      style={{ position: "absolute", top: "22", backgroundSize: "20px 30px" }}
    />{" "}
    {/* <a
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        fontFamily: `${theme.fonts.Inconsolata}`,
        fontSize: `${theme.fontSizes.xs}`,
        marginTop: "1rem",
        marginRight: "4px",
        color: `${theme.colors.darkGrey}`,
        opacity: "1"
      }}
    >
      Made in 2019.
    </a> */}
  </header>
)

export default Logo
