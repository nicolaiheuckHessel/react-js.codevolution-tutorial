import React, { Component } from 'react'
import PureComponentExample from './PureComponentExample'
import RegularComponentExample from './RegularComponentExample'

export default class PureComponentParentExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        console.log("********** Parent **********");
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count
            }))
        }, 2000);
    }
    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <>
                <PureComponentExample count={this.state.count} />
                <RegularComponentExample count={this.state.count} />
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}
