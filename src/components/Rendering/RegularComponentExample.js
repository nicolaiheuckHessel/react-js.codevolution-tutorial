import React, { Component } from 'react'

export default class RegularComponentExample extends Component {
    render() {
        console.log("RegularComponentExample: Rendered");
        return (
            <div>{this.props.count}</div>
        )
    }
}
