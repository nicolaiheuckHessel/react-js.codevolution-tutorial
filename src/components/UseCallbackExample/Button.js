import React from 'react'

const Button = (props) => {
  console.log("Button: Rendered");
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

export default React.memo(Button)