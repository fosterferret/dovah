import React from "react"
import Tally from "../svgs/logo.svg"

const Header = () => (
  <header style={{ display: "flex", justifyContent: "center" }}>
    {" "}
    <Tally
      width={100}
      height={52}
      style={{ position: "absolute", top: "58" }}
    />{" "}
  </header>
)

export default Header
