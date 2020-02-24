import React from 'react'

export default function Greet(props) {
    return (
        <div>
            Hello {props.name}
            {props.children}
            <span>---------------------------</span>
        </div>
        
    )
}
