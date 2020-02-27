import React, { Component } from 'react'

export default class RegComp extends Component {

    componentDidUpdate() {
        console.log("RegComp -> componentDidUpdate")
    }

    render() {
        return (
            <div>
                <h1>{this.props.name} from regular</h1>
            </div>
        )
    }
}
