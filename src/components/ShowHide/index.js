/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  isFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  isSecondName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="body-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button className="button" type="button" onClick={this.isFirstName}>
              Show/Hide Firstname
            </button>
            {firstName ? <p className="name">Joe</p> : ''}
          </div>

          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.isSecondName}
            >
              Show/Hide Lastname
            </button>
            {lastName ? <p className="name">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
