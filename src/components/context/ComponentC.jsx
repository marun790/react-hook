import React, { Component } from 'react'
import { UserContextConsumer } from './UserContext';

class ComponentC extends Component {
    render() {
        return (
            <div>
                <UserContextConsumer>
                    {
                        (name) => {
                            return <div>Hai {name}</div>
                        }
                    }
                </UserContextConsumer>
            </div>
        )
    }
}

export default ComponentC
