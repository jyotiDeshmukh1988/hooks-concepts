import React, { useState } from 'react'
import './reducers.css'

const UseReducer = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <div className="btnStylePosition">
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>count > 0 ? setCount(count-1) : ''}>Decrement</button>
      </div>
    </div>
  )
}

export default UseReducer