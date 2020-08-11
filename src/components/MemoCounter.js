import React, {useState, useMemo} from 'react'

function MemoCounter() {
    const [cOne, setCOne] = useState(0)
    const [cTwo, setCTwo] = useState(0)

    const incrementOne = () => {
        setCOne(cOne + 1)
    }

    const incrementTwo = () => {
        setCTwo(cTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while(i < 200000000) i++
        return cOne % 2 === 0
    },[cOne])

    return (
        <div>
            <div>
    <button onClick={incrementOne}>Increment One {cOne}</button>
    <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
    <button onClick={incrementTwo}>Increment Two {cTwo}</button>
            </div>
        </div>
    )
}

export default MemoCounter
