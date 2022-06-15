import React, { Component } from 'react'

export default class MountingLifecycle extends Component {
    //#region Mounting Explaination
    // constructor
    // static getDerivedStateFromProps(props, state) // If the state should change when the props change, it should be done in here
    // render() //You already know this one (Don't change dom or make ajax calls)
    // componentDidMount() {} // Invoked after a component have been rendered (Here. You can make side effects (ajax, etc.))
    //#endregion

    //#region Mounting execution order example
    constructor() {
        super();
        this.state = {};
        console.log("MountingLifecycle: 1. Constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("MountingLifecycle: 2. getDerivedStateFromProps");
        return {};
    }
    render() {
        console.log("MountingLifecycle: 3. render()");
        return (
            <div>ComponentLifecycle</div>
        )
    }
    componentDidMount() {
        console.log("MountingLifecycle: 4. componentDidMount");
    }
    //#endregion
}
