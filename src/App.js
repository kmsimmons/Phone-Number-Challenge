import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      regexp: /^[0-9\b]+$/
    }
    this.onNumberChange = this.onNumberChange.bind(this)
  }

  onNumberChange = e => {
    let number = e.target.value

    if(number === '' || this.state.regexp.test(number)) {
      this.setState({ [e.target.name]: number})
    }
  }

  render() {
     return (
      <div className='App'>
        <h1>Please Enter Your Phone Number</h1>
        <input
          type='tel'
          name='number'
          placeholder='(555)555-5555'
          value={this.state.number}
          onChange={this.onNumberChange}>
        </input>
        <button>
          Submit
        </button>
      </div>
    )
  }
}

export default App;
