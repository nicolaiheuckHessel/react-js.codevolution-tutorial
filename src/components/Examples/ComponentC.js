import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

const ComponentC = () => {
    const username = useContext(UserContext)
    return (
        <>
            <div>Welcome {username}</div>
        </>
    )
}

export default ComponentC