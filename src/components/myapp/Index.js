import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Index = () => {
    const location = useLocation()
    const history = useHistory()
    console.log(location)
    console.log(history)
  return (
    <div>
        <h1>Hello {history.location.pathname.replace("/",'')} page</h1>
        <button className="btn btn-primary" onClick={()=>history.goBack()}>Go Back</button>
    </div>
  )
}

export default Index