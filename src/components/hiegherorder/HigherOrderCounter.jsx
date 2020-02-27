import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderComp';

class HigherOrderCounter extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleClickCounter}>{this.props.name} {this.props.state.count} times clicked</button>
            </div>
        )
    }
}

export default UpdatedComponent(HigherOrderCounter);