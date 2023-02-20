import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
const About = () => {
    const location = useLocation()
    const history = useHistory()
  return (
    <div>
        <h1>Hello {location.pathname.replace("/",'')} page</h1>
        {
            location.pathname === '/about/thapa' ? 
            <p>Hi, good to see you again</p> : 
            <p>Login to see your files</p>
        }
        <button className="btn btn-primary" onClick={()=>history.goBack()}>Go Back</button>
        <br/><button className="btn btn-primary" onClick={()=>history.push('/index')}>HomePage</button>
    </div>
  )
}

export default About