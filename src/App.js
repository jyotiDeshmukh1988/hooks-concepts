import './App.css';
import { useState } from 'react';
import RulesHooks from './components/RulesHooks';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseStateTodolist from './components/UseStateTodolist';
import ShortCircuitEvaluation from './components/ShortCircuitEvaluation';
function App() {
  console.log(useState())
  return (
    <div className="App">
      <ShortCircuitEvaluation/>
    </div>
  );
}

export default App;
