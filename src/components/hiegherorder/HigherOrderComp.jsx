import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent, IncrementCount) => {

    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        handleClickCounter = () => {
            this.setState(prevstate => { return { count: prevstate.count + IncrementCount } })
        }

        render() {
            return <OriginalComponent
                handleClickCounter={this.handleClickCounter}
                state={this.state}
                {...this.props}
            />
        }
    }

    return NewComponent;
}


export default UpdatedComponent;