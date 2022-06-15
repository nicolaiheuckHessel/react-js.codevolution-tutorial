import React, { createContext, useContext } from 'react'
import ComponentA from './ComponentA'
import { UserProvider } from '../../UserContext'

const ContextHooksExample = () => {
    return (
        <UserProvider value='admin'>
            <ComponentA />
        </UserProvider>
    )
}

export default ContextHooksExample