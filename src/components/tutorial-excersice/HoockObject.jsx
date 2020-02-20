import React, { useState } from 'react'

export default function HoockObject() {

    let names = { firstName: '', lastName: '' };
    const [name, setName] = useState(names);

    return (
        <div style={{ alignContent: "center" }}>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>{JSON.stringify(name)}</h2>
        </div >
    )
}
