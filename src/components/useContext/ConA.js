import React, { useContext } from 'react'
import { ctx } from '../../App'
const ConA = () => {
    const name = useContext(ctx)
  return (
    <div>
        <h2>Con A {name}</h2>
    </div>
  )
}

export default ConA