import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);

    const incrementA = () => {
        setA(oldA => oldA + 1);
    }
    const incrementB = () => {
        setB(oldB => oldB + 1);
    }
    const isEven = useMemo(() => { // Run function and store result untill the dependency changes
        for (let i = 0; i < 200_000_000; i++) { }

        return A % 2 === 0;
    }, [A])
    return (
        <div>
            {isEven ? "Even" : "Odd"}<br />
            <button onClick={incrementA}>Increment A - {A}</button><br />
            <button onClick={incrementB}>Increment B - {B}</button>
        </div>
    )
}

export default UseMemoExample