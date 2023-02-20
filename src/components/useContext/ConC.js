import React, { useContext } from 'react'
import { ctx } from '../../App'

const ConC = () => {
  const myname = useContext(ctx)
  return (
    <div>
      <h2>Con c is {myname}</h2>
    </div>
  )
}

export default ConC