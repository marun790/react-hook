import React, { Component } from 'react'

export default class RefComp extends Component {

    constructor(props) {
        super(props)
        this.ref = React.createRef();
        this.cBRef = null;
        this.setCBRef= (element) => {
            this.cBRef = element
        }
    }

    componentDidMount(){
       console.log(this.ref);
    //    this.ref.current.focus();
    if(this.cBRef) {
        this.cBRef.focus();
    }
    }
    
    handleClick = () => {
        alert(this.ref.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.ref}/>
                <input type="text" ref={this.setCBRef}/>
                <button onClick = {this.handleClick}>Click</button>
            </div>
        )
    }
}
