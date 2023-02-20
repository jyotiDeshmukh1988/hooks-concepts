import React, { useContext } from 'react'
import { ctx } from '../../App'
import ConB from './ConB'
const ConA = () => {
    const name = useContext(ctx)
  return (
    <div>
        <h2>Con A {name}</h2>
        <ConB/>
    </div>
  )
}

export default ConA