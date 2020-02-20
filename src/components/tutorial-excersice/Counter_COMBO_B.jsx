import React, {useContext} from 'react'
import { CounterContext } from './Counter_COMBO_A';



export default function Counter_COMBO_B() {
    const context =  useContext(CounterContext);
    return (
        <div>
            Count -B :{context.countState}
            <button onClick = {() => context.countDispatch("icrement")}>Increse</button>
            <button onClick = {() => context.countDispatch("decrement")}>Decrease</button>
            <button onClick = {() => context.countDispatch("reset")}>Reset</button>
        </div>
    )
}
