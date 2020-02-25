import React, { Component } from 'react'

export default class EventBind extends Component {


    constructor(props) {
        super(props)

        this.state = {
            message: 'Hai'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log(this)
        this.setState({
            message: 'Goodbye!!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.handleClick.bind(this)}>click</button>   --> binding with bind method
                <button onClick={() => this.handleClick()}>click</button>      --> binding with arrow function
                <button onClick={this.handleClick}>click</button>              --> binding with constructor
                <button onClick={this.handleClick}>click</button>              --> binding with constructor
                {/* 
                    In the bove solutions first two will leads to 
                    performance issue as the dom reloading agin
                    thirdonw will done with constructor so it is prefarable
                */}
            </div>
        )
    }
}
