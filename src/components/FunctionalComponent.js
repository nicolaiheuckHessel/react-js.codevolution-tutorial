import React from 'react'

const FunctionalComponent = (props) => {
  return (
    <>
        <h1>{props.text}</h1>
        {props.children}
    </>
  )
}

export default FunctionalComponent