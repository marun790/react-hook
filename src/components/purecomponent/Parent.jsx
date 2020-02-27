import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp';
import Memo from './Memo';

export default class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "arun"
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : "arun"
            })
        }, 2000);
    }
    
    componentDidUpdate(){
        console.log("Parent -> componentDidUpdate");
    }

    render() {        
        return (
            <div>
                {/* <RegComp name = {this.state.name}/>
                <PureComp name = {this.state.name}/> */}
                <Memo name = {this.state.name}/>
            </div>
        )
    }
}
