import React, { useState } from 'react'

const UseStateObject = () => {
    const mybio = {id:0,name:'jyoti',age:33}
    const [myobj,setObj] = useState(mybio)
    const changeName = () => {
        /*setObj((prevs)=>{  // one way
            return {
                ...prevs,
                name: 'Priya',
            }
        }) */

        setObj({...myobj,name:'Priya',age:35})
    }
  return (
    <div>
       <h1> My Name is {myobj.name} and Age is {myobj.age}</h1>
       <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UseStateObject