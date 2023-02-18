import React,{useState} from 'react'

const BasicForm = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [formVal,setformVal] = useState([]);
    const formsubmit = (event) => {
        event.preventDefault();
        //const newEntry = {email: email, password: password}
        setformVal([...formVal,{email: email, password: password}])
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
        formVal.length > 0 && formVal.map((curr,item)=>{
            return <p>Email: {curr.email} and Password: {curr.password}</p>
        })
    }
    </div>
  )
}

export default BasicForm