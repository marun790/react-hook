import React from 'react'
import Props2 from './Props2';

export default function Props1() {

    const name = "arun";
    const age = 31;

    const user = {
        name: "arun",
        age: "31"
    }

    return (
        <div>
            From Props1 -> {name}
            <Props2 name={name} user={user} />
        </div>
    )
}
