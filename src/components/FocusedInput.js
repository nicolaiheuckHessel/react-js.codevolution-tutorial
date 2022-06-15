import React, { useEffect, useRef } from 'react'

const FocusedInput = () => {
    const inputRef = useRef(null); // Get reference to DOM element

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    

    return (
        <input type="text" ref={inputRef}></input>
    )
}

export default FocusedInput