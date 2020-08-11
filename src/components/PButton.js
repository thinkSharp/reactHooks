import React from 'react'

function PButton({handleClick, children}) {
    console.log('Rendering button -', children)
    return (
       <button onClick={handleClick}>
           {children}
       </button>
    )
}

export default React.memo(PButton)
