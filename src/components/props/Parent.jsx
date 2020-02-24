import React from 'react'
import Children from './Children'
import Greet from './Greet'

export default function Parent() {

    const user = {
        name : "arun",
        age : "31"
    }

   

    return (
        <div>
            Welcome...
            <Greet name="arun">
                <p>How are you</p>
            </Greet>
            <Greet name="Aadhira">
                <p>How are you</p>
            </Greet>
            User Details
            <Children user={user} degree = "BE">
                <button>OK</button>
            </Children>


        </div>
    )
}
