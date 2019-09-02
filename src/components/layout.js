import React from "react"

import Header from "./header"
import "../styles/index.scss"
import "./sidebar.css"
import layoutStyles from "./layout.module.scss"
import Sidebar from "./sidebar"

const Layout = props => {
  return (
    <div id="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <div className={layoutStyles.background} />
        <div className={layoutStyles.container}>
          <Header />

          <div className={layoutStyles.content}>{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
