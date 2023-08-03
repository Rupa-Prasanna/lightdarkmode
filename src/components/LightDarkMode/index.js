import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkTheme: true}

  darkTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  getButtonText = () => {
    const {darkTheme} = this.state
    return darkTheme ? 'Light Mode' : 'Dark Mode'
  }

  getContainerTheme = () => {
    const {darkTheme} = this.state
    return darkTheme ? 'dark-container' : 'light-container'
  }

  render() {
    const containerTheme = this.getContainerTheme()
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <div className={containerTheme}>
          <h1 className="heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.darkTheme}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
