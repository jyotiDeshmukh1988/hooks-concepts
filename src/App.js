import './App.css';
import { useState } from 'react';
import RulesHooks from './components/RulesHooks';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseStateTodolist from './components/UseStateTodolist';
import ShortCircuitEvaluation from './components/ShortCircuitEvaluation';
import BasicForm from './components/forms/BasicForm';
function App() {
  console.log(useState())
  return (
    <div className="App">
      <BasicForm/>
    </div>
  );
}

export default App;
