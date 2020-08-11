import React, {useContext} from 'react'
import {UserContext, ChannelContext} from './ComponentC'

function ComponentF() {
    const user = useContext(UserContext)
    const chennel = useContext(ChannelContext)
    return (
        <div>
            Component F - {user} - {chennel}
        </div>
    )
}

export default ComponentF
