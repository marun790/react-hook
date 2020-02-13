import React, { useState, useEffect } from 'react'

export default function HookCounter1() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('update clicjk count');
        document.title = `Clicked ${count} Times`

    }, [count]);

    return (
        <div>
            <input type='text' valu={name} onChange={e => { setName(e.target.value) }}></input>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}
