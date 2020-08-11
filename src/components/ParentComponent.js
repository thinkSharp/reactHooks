import React, {useState, useCallback} from 'react'
import PTitle from './PTitle'
import PButton from './PButton'
import PCount from './PCount'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age +1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)

    },[salary])
    
    return (
        <div>
            <PTitle />
            <PCount text='Age' count={age}/>
            <PButton handleClick={incrementAge}>Increment Age</PButton>
            <PCount text='Salary' count={salary}/>
            <PButton handleClick={incrementSalary}>Increment Salary</PButton>
        </div>
    )
}

export default ParentComponent
