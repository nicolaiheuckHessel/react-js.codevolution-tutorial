import React, { Component } from 'react'

export default class UnmountingLifecycle extends Component {
    constructor() {
        super();
        this.state = {
            intervals: []
        };
    }
    componentDidMount() {
        console.log("UnmountingLifecycle: 1. componentDidMount");
        const interval = setInterval(() => {
            console.log("UnmountingLifecycle: Interval tick");
        }, 1000);
        this.setState(prevState => ({ intervals: [...prevState.intervals, interval] }), () => {
            console.log("UnmountingLifecycle: intervals: ", this.state.intervals)
        });
    }
    componentWillUnmount() { // This is the only one
        // perform cleanup operations (clear timeout/intervals)
        console.log("UnmountingLifecycle: Bye");
        for (const interval of this.state.intervals) {
            clearInterval(interval);
        }
    }
    render() {
        return (
            <div>UnmountingLifecycle</div>
        )
    }
}
