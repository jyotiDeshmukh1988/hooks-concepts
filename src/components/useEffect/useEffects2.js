// cleanup function

import React,{useEffect, useState} from 'react'

const UseEffects2 = () => {
const [widthCount,setWidthCount] = useState(window.screen.width)

const actualWidth = () =>{setWidthCount(window.innerWidth)}

useEffect(()=>{
    console.log('add window inner width: ' + window.innerWidth)
    window.addEventListener('resize',actualWidth)
    return () =>{
        console.log('remove the window inner width: ' + window.innerWidth)
       window.removeEventListener('resize',actualWidth) 
    }
})
  return (
    <div>
        <p>The actual size of the window is</p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffects2