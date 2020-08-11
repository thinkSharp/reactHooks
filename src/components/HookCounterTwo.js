import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            Count : {count} <br></br>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(prevCount => prevCount + 5)}>Increment 5</button>
            <button onClick={() => setCount(prevCount => prevCount - 5)}>Decrement 5</button>
        </div>
    )
}

export default HookCounterTwo
