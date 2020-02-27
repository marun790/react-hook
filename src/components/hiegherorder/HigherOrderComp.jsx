import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent) => {

    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        handleClickCounter = () => {
            this.setState(prevstate => { return { count: prevstate.count + 1 } })
        }

        render() {
            return <OriginalComponent name='arun' handleClickCounter={this.handleClickCounter} state={this.state} />
        }
    }

    return NewComponent;
}


export default UpdatedComponent;