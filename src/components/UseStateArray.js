import React,{useState} from 'react'

const UseStateArray = () => {
    const biodata = [
        { id:0,name:"jyoti",age:31},
        { id:1,name:"priya",age:33},
        { id:2,name:"aayush",age:21},
        ]
        const biodatanew = [
            { id:0,name:"manisha",age:31},
            { id:1,name:"priti",age:33},
            { id:2,name:"prince",age:21},
            ]
    const [mybio,setBio] = useState(biodata)
    const changebio = () => {
        setBio(biodatanew)
    }
    const clear = () => {
        setBio([])
    }
  return (
    <>
    <h1>Bio Data</h1>
    {
        (mybio.length > 0) ? mybio.map((item,index)=>{
            return <p key={index}>{item.name} - {item.age}</p>
        }) : ' '
    }
    <button onClick={changebio}>change biodata</button><br/><br/>
    <button onClick={clear}>clear</button>
    </>
  )
}

export default UseStateArray