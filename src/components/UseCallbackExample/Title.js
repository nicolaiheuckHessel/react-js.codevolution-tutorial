import React from 'react'

const Title = () => {
    console.log("Title: Rendered");
    return (
        <h1>Counter</h1>
    )
}

export default React.memo(Title)