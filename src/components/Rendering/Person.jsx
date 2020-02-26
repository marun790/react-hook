import React from 'react'

export default function Person({ person }) {
    return (
        <div>
            <h2>I am {person.name} my age {person.age} from {person.from}</h2>
        </div>
    )
}
