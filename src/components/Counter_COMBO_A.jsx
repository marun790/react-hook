import React, {useReducer} from 'react'
import Counter_COMBO_B from './Counter_COMBO_B'
import Counter_COMBO_C from './Counter_COMBO_C'

const initilState = 0;

export const CounterContext = React.createContext();

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

export default function Counter_COMBO_A() {

    const [count, dispatch] = useReducer(reducer, initilState);
          
    return (
        <CounterContext.Provider value = {{countState: count, countDispatch: dispatch}}>
        <div>
            COMBO -A : {count}
            <button onClick = {() => dispatch("icrement")}>Increse</button>
            <button onClick = {() => dispatch("decrement")}>Decrease</button>
            <button onClick = {() => dispatch("reset")}>Reset</button>
            <Counter_COMBO_B/>
            <Counter_COMBO_C/>
        </div>
        </CounterContext.Provider>
    )
}
