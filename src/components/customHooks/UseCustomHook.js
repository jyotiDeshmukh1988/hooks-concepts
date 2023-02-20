import React, { useEffect } from 'react'
import useTitleCount from './useTitleCount'

const UseCustomhook = () => {
    // using the custom hook useTitleCount that we have created
    const [count,setCount] = useTitleCount();
    
    useEffect(()=>{
        console.log('i am fine')
    },[])

    console.log('Hello outside UseEffects')
    
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        count > 0 && setCount(count-1)
    }
  return (
    <div>
        <h1>Customhook</h1>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button> <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseCustomhook