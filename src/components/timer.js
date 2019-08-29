import React from "react"
import "./timer.css"
import { IoMdStopwatch } from "react-icons/io"

function contentClass(isShow) {
  if (isShow) {
    return "content"
  }
  return "content invisible"
}

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 1, isShow: false }
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  handleClick() {
    this.setState(function(prevState) {
      return { isShow: !prevState.isShow }
    })
  }
  tick() {
    this.setState({ count: this.state.count + 1 })
  }
  startTimer() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer() {
    this.setState({ count: 0 })
  }
  render() {
    return (
      <div>
        <div className={contentClass(this.state.isShow)}>
          <div className="timer">
            <h1>{this.state.count}</h1>
            <div>
              <button
                className="button buttonStart"
                onClick={this.startTimer.bind(this)}
              >
                Start
              </button>
              <button
                className="button buttonReset"
                onClick={this.stopTimer.bind(this)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="control" onClick={this.handleClick}>
          <h2>
            <IoMdStopwatch className="icon" />
            Timer
          </h2>
        </div>
      </div>
    )
  }
}

export default Timer
