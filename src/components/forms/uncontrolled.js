import React, { useEffect, useRef, useState } from 'react'

const Uncontrolled = () => {
    const [name,setName] = useState()
    const myref = useRef();
    const displayName = (e) => {
        e.preventDefault()
        name == '' ? alert('Please fill the fields') : setName(myref.current.value);
    }
  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="title">Enter your lucky name</label>
                <input type="text" id="luckyName" ref={myref}/><br/>
                <button className="btn-primary" onClick={displayName}>click me</button>
            </div>
        </form>
       <h2>{ name && `My name is ${name}`}</h2> 
    </div>
  )
}

export default Uncontrolled