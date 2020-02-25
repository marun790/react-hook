import React from 'react'

export default function Greet({ name, children }) {  //--> Destructuring
    return (
        <div>
            Hello {name}
            {children}
            <span>---------------------------</span>
        </div>

    )
}
