import React from 'react'

export default function FunctionClick() {

    function clickhandler() {
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={clickhandler}>click</button>
        </div>
    )
}
