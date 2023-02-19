import React, { useReducer, useState } from 'react'
import './reducers.css'

const UseReducer = () => {
  const initialState = 5
  const reducer = (state,action) => {
      console.log(state,action)
      switch (action.type) {
        case 'INCREMENT': 
        return state = state + action.count
        case 'DECREMENT': 
        return state = state - action.count
      }
      
      return state
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <p>{state}</p>
      <div className="btnStylePosition">
        <button onClick={()=>dispatch({type:'INCREMENT',count : 10})}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT',count : 5})}>Decrement</button>
      </div>
    </div>
  )
}

export default UseReducer