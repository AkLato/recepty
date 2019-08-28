import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Scrollbars } from "react-custom-scrollbars"

import ContentList from "./contentList"
import "./sidebar.css"

export default props => {
  return (
    <div>
      <Menu {...props} isOpen={true} noOverlay width={"250px"}>
        <Scrollbars>
          <ContentList />
        </Scrollbars>
      </Menu>
    </div>
  )
}
