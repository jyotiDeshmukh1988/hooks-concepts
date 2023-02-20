import './App.css';
import { createContext, useState } from 'react';
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
import UseReducer from './components/useReducer/useReducer';
import ConA from './components/useContext/ConA';
import Customhook from './components/customHooks/useTitleCount';
import UseCustomhook from './components/customHooks/UseCustomHook';
import Home from './components/myapp/Home';
const ctx = createContext();
function App() {
  //console.log(useState())
  const myvalue = "usage of the useContext hook"
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App
export {ctx}

