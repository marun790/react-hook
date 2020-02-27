import React, { Component } from 'react'
import ComponentB from './ComponentB';
import { UserContextProvider } from './UserContext';

class ComponentA extends Component {
    render() {
        return (
            <div>
                <UserContextProvider value="aadhira">
                    <ComponentB />
                </UserContextProvider>
            </div>
        )
    }
}

export default ComponentA
