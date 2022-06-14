import React from "react"

class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Welcome visitor'
        };
    }
    updateMessage() {
        this.setState({
            text: "Thank you for visiting :)"
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <button onClick={() => this.updateMessage()}>Leave</button>
                {this.props.children}
            </>
        )
    }
}

export default ClassComponent