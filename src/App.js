import './App.css';
import { useState } from 'react';
import RulesHooks from './components/RulesHooks';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseStateTodolist from './components/UseStateTodolist';
function App() {
  console.log(useState())
  return (
    <div className="App">
      <UseStateTodolist/>
    </div>
  );
}

export default App;
