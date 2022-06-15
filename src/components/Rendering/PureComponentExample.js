import React, { PureComponent } from 'react'

export default class PureComponentExample extends PureComponent { // A pure component only updates when the state has changes (OPS: this is only checked with a shallow check so changes to object data will not trigger an update)
    render() {
        console.log("PureComponentExample: Rendered");
        return (
            <div>{this.props.count}</div>
        )
    }
}
