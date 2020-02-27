import React from 'react'

export default function Hero({ name }) {
    if (name === 'joker')
        throw new Error('Got you villan')
    return (
        <div>Hi {name}</div>
    )
}
