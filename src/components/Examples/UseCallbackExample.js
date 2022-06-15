import React, { useCallback, useState } from 'react'
import Button from '../UseCallbackExample/Button'
import Count from '../UseCallbackExample/Count'
import Title from '../UseCallbackExample/Title'

const UseCallbackExample = () => {
    const [age, setAge] = useState(0)
    const [amount, setAmount] = useState(0)

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])
    const incrementAmount = useCallback(() => { // Only re-render the function if the dependency change (or just use "setAmount(oldAmount => oldAmount + 1)" to avoid it entirely in this example)
        setAmount(amount + 1);
    }, [amount])

    return (
        <>
            <Title />
            <Count text="Age" count={age} />
            <Button onClick={incrementAge}>Increment age</Button>
            <Count text="Amount" count={amount} />
            <Button onClick={incrementAmount}>Increment amount</Button>
        </>
    )
}

export default UseCallbackExample