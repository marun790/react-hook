import React, { Component, PureComponent } from 'react'

export default class PureComp extends PureComponent {

    componentDidUpdate() {
        console.log("PureComp -> componentDidUpdate")
    }

    render() {
        return (
            <div>
                <h1>{this.props.name} from Pure</h1>
            </div>
        )
    }
}
