import React from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <lable> First Name</lable>
                    <input 
                    {...bindFirstName}
                    type='text'></input>
                </div>
                <div>
                    <lable> Last Name</lable>
                    <input 
                    {...bindLastName}
                    type='text'></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
