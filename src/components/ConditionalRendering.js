import React, { Component } from 'react'

class ConditionalRendering extends Component {
  render() {
    if (this.props.condition) {
        return (
            <div>The condition is true</div>
          )
    }
    else {
        return (
            <div>The condition is false</div>
          )
    }
  }
}

export default ConditionalRendering