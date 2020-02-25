import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Arun'
        }
    }

    handleClick = (familyMember) => {
        alert(`Hai !! ${this.state.name} and ${familyMember}`)
    }


    render() {
        return (
            <div>
                <Child handleClick={this.handleClick} />
            </div>
        )
    }
}
