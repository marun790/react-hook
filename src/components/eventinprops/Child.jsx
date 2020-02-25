import React, { Component } from 'react'

export default class Child extends Component {

    render() {
        const { handleClick } = this.props;

        return (
            <div>
                <button onClick={() => handleClick('Dhivya')}> Click</button>
            </div>
        )
    }
}
