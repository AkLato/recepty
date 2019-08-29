import React from "react"
import "./timerToggle.css"
import Timer from "./timer"

function contentClass(isShow) {
  if (isShow) {
    return "content"
  }
  return "content invisible"
}

class TimerToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isShow: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(function(prevState) {
      return { isShow: !prevState.isShow }
    })
  }

  render() {
    return (
      <div>
        <div className="control" onClick={this.handleClick}>
          Timer
        </div>
        <Timer className={contentClass(this.state.isShow)}>Content</Timer>
      </div>
    )
  }
}

export default TimerToggle
