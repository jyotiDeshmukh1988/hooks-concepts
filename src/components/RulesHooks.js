// rules for the hooks usage and component creation
// 1 - Aiways write it inside the component or function
// 2 - Component name must be PascalCase(first letter should be uppercase)
// 3 - We can directly import or we can directly write use it Reach.hookname
// 4 - Do not call hooks inside loops, conditions, or nested functions.

import React from 'react'

const RulesHooks = () => {
    /*if(true){
        const [test,setTest] = React.useState("test value")
    }*/ // not recommended to use hook like this
    const [test,setTest] = React.useState("test value") // correct way to use hook
  return (
    <>
    <h1>{test}</h1>
    <div>RulesHooks</div>
    </>
  )
}

export default RulesHooks