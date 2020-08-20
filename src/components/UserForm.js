import React from 'react'
import useInput from '../hooks/useInput'
import UserForms1 from './UserForms1'

function UserForm() {
    const [firstName, _, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    const [databaseType, bindDatabaseType, resetDatabaseType] = useInput('Oracle')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName} - ${databaseType}`)
        resetFirstName()
        resetLastName()
        resetDatabaseType()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <UserForms1 />
                <div>
                    <label> Last Name asd</label>
                    <input 
                    {...bindLastName}
                    type='text'></input>
                </div>
                <div>
                <label className="col-sm-3 col-form-label">Database Type</label>
                            
                            <select className="form-control" 
                                {...bindDatabaseType}
                            >
                              <option value="Oracle"> Oracle</option>
                              <option value="Microsoft SQL Server">Microsoft SQL Server</option>
                              <option value="Sybase">Sybase</option>
                              <option value="My SQL">My SQL</option>
                              <option value="Aurora">Aurora</option>
                            </select>
                            
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
