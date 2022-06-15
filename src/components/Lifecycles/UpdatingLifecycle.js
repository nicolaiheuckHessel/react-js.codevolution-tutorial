import React, { Component } from 'react'

export default class UpdatingLifecycle extends Component {
    constructor() {
        super();
        this.state = {};
    }
    //#region Updating explaination
    // static getDerivedStateFromProps(props, state) // Same as Mounting
    // shouldComponentUpdate(nextProps, nextState) {} // If this component should only render based on some logic. Place that here. (do NOT call setState)
    // render() // You know it (don't change state, interact with DOM or call ajax)
    // getSnapshotBeforeUpdate(prevProps, prevState) // Get a copy of the current state before the state is updated to something else? (example: read scroll position from DOM and scroll down to the equivilent on the new page)
    // componentDidUpdate(prevProps, prevState, snapshot) // Called after finished rendering. Only called once after update.
    //#endregion

    triggerUpdate() {
        this.setState({ count: 0 });
    }

    //#region Example
    static getDerivedStateFromProps(props, state) {
        console.log("UpdatingLifecycle: 1. getDerivedStateFromProps");
        return {};
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("UpdatingLifecycle: 2. shouldComponentUpdate");
        return true;
    }
    render() {
        console.log("UpdatingLifecycle: 3. render");
        return (
            <>
                UpdatingLifecycle <button onClick={() => this.triggerUpdate()}>Update</button>
            </>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("UpdatingLifecycle: 4. getSnapshotBeforeUpdate");
        return null;

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("UpdatingLifecycle: 5. componentDidUpdate");
    }
    //#endregion

}
