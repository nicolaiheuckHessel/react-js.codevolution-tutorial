import React from 'react'
import ClassComponent from '../ClassComponent'
import ConditionalRendering from '../ConditionalRendering'
import CorrectEventHandlerBinding from '../CorrectEventHandlerBinding'
import Counter from '../Counter'
import FunctionalComponent from '../FunctionalComponent'
import List from '../List'

const BeforeEpisode15Examples = () => {
    return (
        <>
            <Counter />
            <CorrectEventHandlerBinding />
            <ConditionalRendering condition={true} />
            <List />
            <FunctionalComponent text="This is from a functional component">
                <h2>And this is it's children</h2>
            </FunctionalComponent>
            <ClassComponent text="This is from a class component">
                <h2>And this is it's children</h2>
            </ClassComponent>
        </>
    )
}

export default BeforeEpisode15Examples