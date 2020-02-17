import React, { useReducer } from 'react'

const initilState = 0;


// reducer:
//     Accept current state and action and will return a new state
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

export default function CounterThree() {

    //userReducer:
    // Will accept th reducer and initialState and will return pair of values
    // 0 -> current state 
    // 1 -> dispatch event
    const [count, dispatch] = useReducer(reducer, initilState);
    const [count2, dispatch2] = useReducer(reducer, initilState);

    return (
        <div>
            count :  {count}
            <button onClick={() => dispatch("icrement")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
            <div>
                count :  {count2}
                <button onClick={() => dispatch2("icrement")}>Increment</button>
                <button onClick={() => dispatch2("decrement")}>Decrement</button>
                <button onClick={() => dispatch2("reset")}>Reset</button>
            </div>
        </div>

    )
}
