import React from 'react'

export default function Props2(props) {
    const shop = {
        stock: '100%',
        profit: "20%"
    }

    const { stock, profit } = shop;
    const { name, age } = props.user;
    console.log(props)
    return (

        < div >
            <ul>
                <li>From Props2 ->{props.name}</li>
                <li>From obj1 ->{name}</li>
                <li>From obj ->{stock}</li>
            </ul>
        </div >
    )
}
