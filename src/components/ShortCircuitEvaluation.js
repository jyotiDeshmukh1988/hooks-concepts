// Short Circuit Evaluation with React | Logical && and || Operators in ReactJS

import React from 'react'

const ShortCircuitEvaluation = () => {
    const [demo,setDemo] = React.useState("Hello, world!")
  return (
    <div>
        { demo || /*if we add the initial value in the useState then it return Hello world otherwise right side content data*/
        <>
        <div>
            <h2>Right Side Data</h2>
        <p>In Or Operators if the first Operators value is true then it return the value of the left side data</p>
        <p>If the first Operators value is false then it will return right side data</p>
        </div>
        </>
        }
         { demo && 
        <>
        <h2>Right Side Data</h2>
        <p>In AND Operators if the first Operators value is true then it return the value of the right side data</p>
        </>
        }
    </div>
  )
}

export default ShortCircuitEvaluation