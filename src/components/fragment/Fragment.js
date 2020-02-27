import React, { Component } from 'react'

export default class Fragment extends Component {
    items = [
        {
            id: 25,
            title: 'TT1'
        }, {
            id: 22,
            title: 'TT1'
        }
    ]
    render() {
        return (
            this.items.map(item =>
                <React.Fragment key={item.id}>
                    <h1>
                        Title : {item.title}
                    </h1>
                </React.Fragment>)
        )
    }
}
