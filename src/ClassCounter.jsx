import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor() {
        super()
        this.state={count:0}
    }
    
    handleIncrease = () => {
            this.setState( (prevstate =>({count:prevstate.count+5})) )
        }
    
    handleDecrease = () => {
            this.setState( (prevstate =>({count:prevstate.count-5})) )
        }
  render() {
    return (
      <div>
        <h2 className= "App-header">Class Component</h2>
                <div className="ct">
                    <h1>Counter - {this.state.count}</h1>
                </div>
    
                <button onClick={this.handleIncrease}>Increment</button>
                <button onClick={this.handleDecrease}>Decrement</button>
      </div>
    )
  }
}
