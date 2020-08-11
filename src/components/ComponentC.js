import React from 'react'
import ComponentE from './ComponentE'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function ComponentC() {
    return (
        <div>
            <UserContext.Provider value={'Krishna'}>
                <ChannelContext.Provider value={'Janmashtami'}>
                <ComponentE />
                </ChannelContext.Provider>
            </UserContext.Provider>
            
        </div>
    )
}

export default ComponentC
