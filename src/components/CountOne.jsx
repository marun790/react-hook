import React, { useReducer } from 'react'

const initilState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "icrement":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initilState;
        default:
            return state;
    }

}

export default function CountOne() {



    const [count, dispatch] = useReducer(reducer, initilState);

    return (
        <div>
            count :  {count}
            <button onClick={() => { dispatch("icrement") }}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}
