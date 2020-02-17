import React,{useContext} from 'react'
import Counter_COMBO_D from './Counter_COMBO_D'
import { CounterContext } from './Counter_COMBO_A';

export default function Counter_COMBO_C() {
    const context = useContext(CounterContext);
    return (
        <div>
            Count -C :{context.countState}
            <button onClick = {() => context.countDispatch("icrement")}>Increse</button>
            <button onClick = {() => context.countDispatch("decrement")}>Decrease</button>
            <button onClick = {() => context.countDispatch("reset")}>Reset</button>
            <Counter_COMBO_D/>
        </div>
    )
}
