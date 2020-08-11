import React from 'react'

function PTitle() {
    console.log('Rendering Title')
    return (
        <div>
            UserCallback Hook Title
        </div>
    )
}

export default React.memo(PTitle)
