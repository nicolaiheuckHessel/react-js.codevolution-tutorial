import React, { Component } from 'react' // Video: https://www.youtube.com/watch?v=kVWpBtRjkCk&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=14

export default class CorrectEventHandlerBinding extends Component {

  constructor() {
    super();
    this.state = {
      stateMessage: "Clicked!"
    };

    this.clickHandler3 = this.clickHandler3.bind(this);
  }

  clickHandler1() { // Using this method. Every to the state will cause the component to re-render, and therefore create a new event handler for each time the button is clicked. // At 5:48
    console.log(this.state.stateMessage + " using .bind(this)");
  }
  clickHandler2() {// Using this method. Can also have performance implecations. This might be a problem when re-rendering multiple child components // At 7:30
    console.log(this.state.stateMessage + " using () =>");
  }
  clickHandler3() { // This method is the one recommended by the documentation.
    console.log(this.state.stateMessage + " using .bind(this) from the constructor");
  }
  clickHandler4 = () => { // This method is also recommended by the documentation. (But is still an experimental feature)
    console.log(this.state.stateMessage + " defining the method as a lambda expression");
  }

  render() {
    return (
      <div>
        <h1>These are the different ways to bind events</h1>
        <button onClick={this.clickHandler1.bind(this)}>.bind(this)</button><br/>
        <button onClick={() => this.clickHandler2()}>() ={'>'}</button><br/>
        <button onClick={this.clickHandler3}>.bind(this) in the constructor</button><br/>
        <button onClick={this.clickHandler4}>defining the method as a lambda expression</button><br/>
      </div>
    )
  }
}
