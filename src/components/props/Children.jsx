import React from 'react'

export default function Children(props) {
    return (
        props.user.name = "Test", //Possible
        //props.degree = "test", // not possible
        <div >
            <ul>
                <li>Name:{props.user.name}</li>
                <li>Age:{props.user.age}</li>
                <li> Degree:{props.degree}</li>
            </ul>
            {props.children}
        </div>
        
    )
}

