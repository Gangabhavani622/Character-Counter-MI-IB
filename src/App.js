import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import DisplayInputListView from './Components/DisplayInputListView'

import './App.css'

// Replace your code here
class App extends Component {
  state = {userInput: '', userInputList: []}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddUserInput = () => {
    const {userInput} = this.state
    if (userInput !== '') {
      const userDetails = {
        name: userInput,
        length: userInput.length,
        id: uuidV4(),
      }
      this.setState(prevState => ({
        userInputList: [...prevState.userInputList, userDetails],
        userInput: '',
      }))
    }
  }

  renderEmptyListView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
      className="image"
    />
  )

  renderInputListView = () => {
    const {userInputList} = this.state

    return (
      <ul className="input-list-elements">
        {userInputList.map(eachItem => (
          <DisplayInputListView key={eachItem.id} inputDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {userInput, userInputList} = this.state

    return (
      <div className="app-container">
        <div className="input-list-cont">
          <h1 className="heading">Count the characters like a Boss</h1>
          {userInputList.length === 0
            ? this.renderEmptyListView()
            : this.renderInputListView()}
        </div>
        <div className="input-container">
          <h1 className="heading">Character Counter</h1>
          <form onSubmit={this.onClickAddUserInput} className="input-add-cont">
            <input
              className="input-ele"
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the Characters here"
            />
            <button
              className="add-btn"
              type="button"
              onClick={this.onClickAddUserInput}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
