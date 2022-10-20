import React from 'react'
import { Children, Child2 } from './Children'
const Parent = () => {
  return (
    <div>
      <Children color='#000' onClick={()=>console.log("clikked")} name="Ulugbek" age={21}/>
      <Child2/> 
    </div>
  )
}

export default Parent