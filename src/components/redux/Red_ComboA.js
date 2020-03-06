import React from 'react'
import Redux_ComboB from './Redux_ComboB'
import Redux_ComboC from './Redux_ComboC'

function Red_ComboA() {
   const handleIncreaseClick = () => {

    }

    const handleDecreseClick = () => {

    }

    return (
        <div>
            Count : 
            <br/>
            <button onClick={handleIncreaseClick}>Incremet From A</button>
            <button onClick={handleDecreseClick}>Decrement From A</button>
            <Redux_ComboB/>
            <Redux_ComboC/>
        </div>
    )
}

export default Red_ComboA

