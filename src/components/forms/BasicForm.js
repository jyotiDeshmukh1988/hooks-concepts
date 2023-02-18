import React,{useState} from 'react'

const BasicForm = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [formVal,setformVal] = useState([]);
    const formsubmit = (event) => {
        event.preventDefault();
        if(email && password){
             //const newEntry = {email: email, password: password}
            setformVal([...formVal,{id:new Date().getTime().toString(),email, password}])
            setEmail('')
            setPassword('')
        }
        else{
            alert('Please fill the values')
        }
       
    }
    console.log(formVal)
  return (
    <div>
    <form onSubmit={formsubmit}>
        <div>
            <label>Email</label>
            <input type="text" name="email" autoComplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" autoComplete="off" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button type='Submit'>Submit</button>
    </form>
    {
        formVal.length > 0 && formVal.map((curr)=>{
            const {id,email,password} = curr
            return <p key={id}>Email: {email} and Password: {password}</p>
        })
    }
    </div>
  )
}

export default BasicForm