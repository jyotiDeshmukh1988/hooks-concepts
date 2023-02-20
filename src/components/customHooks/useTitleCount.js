import React, { useEffect, useState } from 'react'

const useTitleCount = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('i am great');
        (count > 0) ? document.title = ` chats (${count})` :document.title = `chats`
    },[count])

    return [count,setCount]
}


export default useTitleCount