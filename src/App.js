import './App.css';
import { useState } from 'react';
import RulesHooks from './components/RulesHooks';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
function App() {
  console.log(useState())
  return (
    <div className="App">
      <UseStateObject/>
    </div>
  );
}

export default App;
