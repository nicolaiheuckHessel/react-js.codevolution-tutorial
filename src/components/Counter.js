
import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  incrementCounter(amount) {
    this.setState((lastState) => ({
      count: lastState.count + 1
    }), () => { console.log(this.state.count); })
  }

  render() {
    return (
      <>
        <p style={{ textAlign: 'center' }}>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCounter()}>Increment</button>
      </>
    )
  }
}
export default Counter