import React from "react"
import { Link } from "gatsby"
import logo from "../posts/gatsby/images/logo.svg"

import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <Link className="logoText" to="/">
        <img src={logo} alt="logo" className="logo" />
        Pocket Cook
      </Link>
      <Link className="navItem" activeClassName="activeNavItem" to="/tools">
        CMS
      </Link>
      <Link className="navItem" activeClassName="activeNavItem" to="/kontakt">
        Kontakt
      </Link>
      <Link className="navItem" activeClassName="activeNavItem" to="/">
        Domů
      </Link>
    </header>
  )
}

export default Header
