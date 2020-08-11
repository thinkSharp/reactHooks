import React from 'react'
import useCounter from '../hooks/useCounter'

function CustomHookCounter1() {
    const [count, increment, decrement, reset] = useCounter()
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomHookCounter1
