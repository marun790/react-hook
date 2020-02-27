import React from 'react'

function Memo({name}) {
    console.log('Inside Memo component');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memo);
