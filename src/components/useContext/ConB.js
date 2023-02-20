import React, { useContext } from 'react'
import ConC from './ConC'
import { ctx } from '../../App'
const ConB = () => {
  const myname = useContext(ctx)
  return (
    <div>
      <h2>Con B is {myname}</h2>
      <ConC/>
    </div>
  )
}

export default ConB