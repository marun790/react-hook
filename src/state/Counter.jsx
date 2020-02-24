import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count:0
        }
    }

    incrementCount() {
        //console.log("Before =>",this.state.count);
        // this.setState(
        //     {
        //         ...this.state,
        //         count: this.state.count+1
        //     }, () => {
        //         console.log("Callback =>",this.state.count);
        //     }
        // );
        // console.log("After =>",this.state.count);
        
        console.log("Before =>",this.state.count);
        this.setState(
            {count: this.state.count+1}
        , () => {
            console.log("Callback : ", this.state.count)
        });

        
    }

    shouldComponentUpdate(){
        return true;
    }


    componentDidUpdate(){
        // console.log('component updated')
    }

    increment5() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }

    render() {
        return (
            <div>
                {this.state.count}
                {/* <button onClick = {() => 
                    this.setState({count : this.state.count+1})}>Click</button> */}
                <button onClick = {() => this.increment5()} > Click</button>
            </div>
        )
    }
}
