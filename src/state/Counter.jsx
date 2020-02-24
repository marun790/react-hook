import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count:0
        }
    }

    incrementCount() {
        console.log(this.state.count);
        // this.state.count = this.state.count + 1; -> never do this it wo't re-render the dom
        this.setState(
            {
                ...this.state,
                count: this.state.count+1
            }
        );
    }

    shouldComponentUpdate(){
        return true;
    }


    componentDidUpdate(){
        console.log('component updated')
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick = {() => 
                    this.setState({count : this.state.count+1})}>Click</button>
                <button onClick = {() => this.incrementCount()} > Click</button>
            </div>
        )
    }
}
