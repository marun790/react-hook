import React, {useState, useEffect, } from 'react'



export default function IntervalHookCounter() {
    const[count, setCount] = useState(0);

    const tick = () => {
        setCount(count +1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);


        //cleanup for mimick component will unmount
        return () => {
            clearInterval(interval);
        };

    }, [count])


    return (
        <div>
            {count}
        </div>
    )
}
