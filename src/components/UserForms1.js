import React from 'react'
import useInput from '../hooks/useInput'

function UserForms1() {
    const [na, bindFirstName, na2] = useInput('Hello World')
    return (
        <div>
                    
                    <label> First Name</label>
                    <input 
                    {...bindFirstName}
                    type='text'></input>
                </div>
    )
}

export default UserForms1
