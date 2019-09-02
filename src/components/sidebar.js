import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Scrollbars } from "react-custom-scrollbars"

import ContentListBurger from "./contentListBurger"
import "./sidebar.css"

export default props => {
  return (
    <div>
      <Menu {...props} isOpen={false} width={"250px"}>
        <Scrollbars>
          <ContentListBurger />
        </Scrollbars>
      </Menu>
    </div>
  )
}
