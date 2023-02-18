import React, { useEffect, useState } from 'react'

const UseEffects1 = () => {
    const[count,setCount] = useState(0)
    const [name,setName] = useState()

    useEffect(()=>{
        console.log('i am great');
        (count > 0) ? document.title = ` chats (${count})` :document.title = `chats`
    },[count])

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
    const changeName = () => {
        setName("jyoti")
    }
  return (
    <div>
        <h1>UseEffects1</h1>
        <h2>{count}</h2>
        <h3>{name}</h3>
        <button onClick={changeName}>Change Name</button><br/><br/>
        <button onClick={increment}>Increment</button> <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseEffects1