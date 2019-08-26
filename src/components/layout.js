import React from "react"

import Header from "./header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div>
      <div className={layoutStyles.background}></div>
      <div className={layoutStyles.container}>
        <Header />
        <div className={layoutStyles.content}>{props.children}</div>
      </div>
    </div>
  )
}

export default Layout
