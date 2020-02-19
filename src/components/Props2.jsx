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
            From Props2 ->{props.name}
            From obj1 ->{name}
            From obj ->{stock}
        </div >
    )
}
