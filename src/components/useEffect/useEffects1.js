import React, { useEffect, useState } from 'react'

const UseEffects1 = () => {
    const[count,setCount] = useState(0)
    useEffect(()=>{
        console.log('Hello inside UseEffects')
        document.title = ` chats (${count})`
    })
    console.log('Hello outside UseEffects')
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        count > 0 && setCount(count-1)
    }
  return (
    <div>
        <h1>UseEffects1</h1>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button> <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseEffects1