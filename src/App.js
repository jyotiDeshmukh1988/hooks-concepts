import './App.css';
import { useState } from 'react';
import RulesHooks from './components/RulesHooks';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseStateTodolist from './components/UseStateTodolist';
import ShortCircuitEvaluation from './components/ShortCircuitEvaluation';
import BasicForm from './components/forms/BasicForm';
import UseEffects1 from './components/useEffect/useEffects1';
import UseEffects2 from './components/useEffect/useEffects2';
import UseEffectApi from './components/useEffect/useEffectApi';
import Uncontrolled from './components/forms/uncontrolled';
function App() {
  //console.log(useState())
  return (
    <div className="App">
      <Uncontrolled/>
    </div>
  );
}

export default App;
