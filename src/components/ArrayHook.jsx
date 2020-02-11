import React, { useState } from 'react'

export default function ArrayHook() {

    const [cart, setCart] = useState([])

    function add2Cart(item) {
        updateCard(setCart(cart.push(item)));
    }

    return (

        <div>
            <input type="text" />
            <button onClick={() => add2Cart()}> Add</button>
            <ul>

            </ul>
        </div>
    )
}
