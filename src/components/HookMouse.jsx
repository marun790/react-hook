import React, { useState, useEffect } from 'react'

export default function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("logMousePosition");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", logMousePosition);

        // whatever we returning will be a cleanup function
        return () => {
            console.log('inside remove component');
            window.removeEventListener("mousemove", logMousePosition);
        };
    }, []);
    /**   by pasing an empty array we mimik the component did mount, 
     so the useEffect() wont be called whenever the state got changed.*/


    return (
        <div>
            X : {x} And Y : {y}
        </div>
    )
}
