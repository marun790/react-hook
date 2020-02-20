import React, { useState } from 'react'


export default function HookCounter() {
    const initialCount = 0;
    let myObj = {
        name: "arun"
    }

    const [count, setCount] = useState(initialCount);


    function incrementBy5() {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement </button>
            <button onClick={() => setCount(initialCount)}>Reset </button>
            <button onClick={() => incrementBy5()}>Increment by 5</button>

            {/* <button onClick={() => setCount(count + 1)}>Count : {count}</button> */}
        </div>
        // <div>Test</div>
    )
}
