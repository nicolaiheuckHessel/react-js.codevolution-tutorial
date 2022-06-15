import React from 'react'

const Count = ({count}) => {
  console.log("Count: Rendered");
  return (
    <div>{count}</div>
  )
}

export default React.memo(Count)