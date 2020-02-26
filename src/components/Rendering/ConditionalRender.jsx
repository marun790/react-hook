import React, { Component } from 'react'

export default class Render extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {
        // const message = this.state.isLoggedIn ? "Arun" : "Guest"


        //<------Conditional Operator approach----->
        // return this.state.isLoggedIn
        //     ? <div>Hai Arun</div>
        //     : <div>Hai Guest</div>

        //<------Conditional Operator approach----->
        // return (
        //     <div>
        //         Hai {this.state.isLoggedIn ? "Arun" : "Guest"}
        //     </div>
        // )

        return this.state.isLoggedIn && <div>Hai Arun</div>
    }
}
