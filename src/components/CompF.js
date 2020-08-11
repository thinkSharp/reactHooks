import React, {useContext} from 'react'
import {CountContext} from './ContextReducer'

function CompF() {
    const countContext = useContext(CountContext)

    return (
        <div>
            <div>CompF {countContext.count1}</div>
            <button onClick={() => countContext.dispatch1('increment')}>Increment</button>
            <button onClick={() => countContext.dispatch1('decrement')}>Decrement</button>
            <button onClick={() => countContext.dispatch1('reset')}>Reset</button>
        </div>
    )
}

export default CompF
