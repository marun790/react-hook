import React from 'react'
import Person from './Person';

export default function RenderList() {

    const names = ['bob', 'tom', 'jerry'];
    const person = [
        {
            id: 1,
            name: 'bob',
            age: '30',
            from: 'california'
        }, {
            id: 2,
            name: 'tom',
            age: '28',
            from: 'US'
        }, {
            id: 3,
            name: 'jerry',
            age: '21',
            from: 'Uk'
        }


    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} --> {name}</h2>);
    // const personList = person.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    )
}
