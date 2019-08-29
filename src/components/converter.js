import React from "react"
import "./converter.css"

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

function tryConvert(value, convert) {
  const input = parseFloat(value)
  if (Number.isNaN(input)) {
    return ""
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    const value = this.props.value
    const scale = this.props.scale
    return (
      <div className="container">
        <form>
          <div>
            <lable>
              <h4>{scaleNames[scale]}: </h4>
            </lable>
            <input
              type="number"
              value={value}
              onChange={this.handleChange}
              placeholder="Enter temp"
            />
          </div>
        </form>
      </div>
    )
  }
}

class Converter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "", scale: "c" }
    this.handleChangeCelsius = this.handleChangeCelsius.bind(this)
    this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this)
  }

  handleChangeCelsius(value) {
    this.setState({ scale: "c", value })
  }

  handleChangeFahrenheit(value) {
    this.setState({ scale: "f", value })
  }

  render() {
    const scale = this.state.scale
    const value = this.state.value
    const celsius = scale === "f" ? tryConvert(value, toCelsius) : value
    const fahrenheit = scale === "c" ? tryConvert(value, toFahrenheit) : value

    return (
      <div className="container">
        <h3 className="head">Temp Converter</h3>
        <div className="flex">
          <TemperatureInput
            scale="c"
            value={celsius}
            onChange={this.handleChangeCelsius}
          />
          <TemperatureInput
            scale="f"
            value={fahrenheit}
            onChange={this.handleChangeFahrenheit}
          />
        </div>
      </div>
    )
  }
}

export default Converter
