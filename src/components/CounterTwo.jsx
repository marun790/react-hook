import React, { useReducer } from 'react'


const initialState = {
    firstCount: 0,
    secondCount: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                firstCount: state.firstCount + action.value
            };
        case "decrement":
            return {
                ...state,
                firstCount: state.firstCount - action.value
            };
        case "increment2":
            return {
                ...state,
                secondCount: state.secondCount + action.value
            };
        case "decrement2":
            return {
                ...state,
                secondCount: state.secondCount - action.value
            };
        default:
            return state;

    }
}

export default function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            firstCount :  {count.firstCount}
            secondCount : {count.secondCount}
            <button onClick={() => dispatch({ type: "increment", value: 1 })}> Increment </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}> Decrement </button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}> Increment5 </button>
            <button onClick={() => dispatch({ type: "increment2", value: 3 })}> Increment2</button>
            <button onClick={() => dispatch({ type: "decrement2", value: 3 })}>decrement2</button>
        </div >
    )
}
