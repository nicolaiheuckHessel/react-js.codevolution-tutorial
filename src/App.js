import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import Counter from './components/Counter';
import CorrectEventHandlerBinding from './components/CorrectEventHandlerBinding';

function App() {
  return (
    <div className="App">
      <Counter />
      <CorrectEventHandlerBinding />
      <FunctionalComponent text="This is from a functional component">
        <h2>And this is it's children</h2>
      </FunctionalComponent>
      <ClassComponent text="This is from a class component">
        <h2>And this is it's children</h2>
      </ClassComponent>
    </div>
  );
}

export default App
