import React,{useState,useRef} from 'react'

const UseStateTodolist = () => {
    const [todos,setTodo] = useState([])
    const myref = useRef()
    const Addtodo = () => {
        //console.log(myref.current.value)
        const val = myref.current.value;
        if(!todos.includes(val)){
            setTodo([...todos,val])
        }
        myref.current.value = ''
    }
    const clear = () => {
        setTodo([])
    }
    const remove = (id) => {
        const myfile =  todos.filter((todo,index)=>{
            return index !== id
        })
        setTodo(myfile)
    }
  return (
    <>
    <h1>Bio Data</h1>
    <input type="text" name="todo" ref={myref}/> <button onClick={Addtodo}>Add Todo</button><br/><br/>
    <button onClick={clear}>clear</button>
    <br/><br/>
    { todos.length > 0 &&
        todos.map((todo,index) => (
            <div key={index}>
              <p><span>{todo}</span> <button onClick={() => remove(index)}>Remove</button></p>
           </div>
    ))
    }
    </>
  )
}

export default UseStateTodolist