import React, { Component } from 'react';
import './App.css';

const formatInput = (value, prevVal) => {
  if(!value) return value
  const currentVal = value.replace(/[^\d]/g, '')
  const currentValLength = currentVal.length

  if(!prevVal || value.length > prevVal.length) {
    
    //first three
    if(currentValLength < 4)
      return currentVal
    
    //add parentheses
    if(currentValLength < 7)
      return `(${currentVal.slice(0, 3)}) ${currentVal.slice(3)}`

    //add dash
    return `(${currentVal.slice(0, 3)}) ${currentVal.slice(3, 6)}-${currentVal.slice(6, 10)}`
  }
}

const validateInput = value => {
  let error = ''

  if(!value) error = 'Required'
  if(value.length !== 14) error = 'Please enter a valid phone number, ex: (123)456-7890'
  return error
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      number: '',
      error: ''
    }
    this.onNumberChange = this.onNumberChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onNumberChange({ target: { value } }) {
    this.setState(prevState => ({ number: formatInput(value, prevState.number)}))
  }

  handleSubmit(e) {
    e.preventDefault()
    const error = validateInput(this.state.number)
    this.setState({ error }, () => {
      if(!error) {
        setTimeout(() => {
          alert(JSON.stringify(this.state, null,  4))
        }, 300)
      }
    })
  }

  render() {
     return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <h1>Please Enter Your Phone Number</h1>
          <input
            type='text'
            name='number'
            placeholder='(555)555-5555'
            value={this.state.number}
            onChange={this.onNumberChange}>
          </input>
          <button>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

