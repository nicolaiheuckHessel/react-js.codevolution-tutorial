import React, { Component } from 'react'

export default class List extends Component { // Very good explaination to why you should use keys in episode 18 at 4:18
  render() {
    const numbers = [1,2,3,4];
    const resultInVariableForBetterReadablity = numbers.map(number => <li key={number}>{number}</li>); // For complex items (many properties or render logic). Create an item component and pass down the value to that.
    return (
      <ul>
        {
            resultInVariableForBetterReadablity
            // numbers.map(number => <li>{number}</li>) // Single line
            // numbers.map(number => ( // Multiline
            //     <>
            //         <li>{number}</li>
            //         <li><strong>{number}</strong></li>
            //         <li><strike>{number}</strike></li>
            //     </>
            // ))
        }
      </ul>
    )
  }
}
