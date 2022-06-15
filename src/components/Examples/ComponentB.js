import React from 'react'
import { UserProvider } from '../../UserContext'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <UserProvider value='overwritten username'>
      <ComponentC />
    </UserProvider>
  )
}

export default ComponentB