import React from 'react'

function PCount({text, count}) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(PCount)
