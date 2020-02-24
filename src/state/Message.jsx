import React, { Component } from 'react'

export default class Message extends Component {

    constructor() {
        super();
        this.state = {    //state have tobe created inside constructor
            message : 'Welcome Visitor'
        }
    }
   
    updateMessage() {
        // console.log("Button clicked", this.state.message);
        this.setState({
            message : 'Thanks fo subscription'
        })
    }


    render() {                     
        return (
            <div>
                {this.state.message}
                <button onClick = {() =>this.updateMessage()}>Subscribe</button>
            </div>
        )
    }
}