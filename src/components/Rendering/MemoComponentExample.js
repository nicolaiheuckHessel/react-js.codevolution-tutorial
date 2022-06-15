import React from 'react'

const MemoComponentExample = ({ count }) => {
    console.log("MemoComponentExample: Rendered");
    return (
        <div>{count}</div>
    )
}

export default React.memo(MemoComponentExample)