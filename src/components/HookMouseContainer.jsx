import React, {useState} from 'react'
import HookMouse from './HookMouse';

export default function HookMouseContainer() {
    const[disply, setDisplay] = useState(1);

    

    return (
        <div>
            <button onClick = {() => setDisplay(!disply)}>Toggle MoseCopmonrnt</button>
            {disply && <HookMouse/>}
        </div>
    )
}
