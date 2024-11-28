import React from 'react'
import Counter from './Counter'
function CounterParent(){
    return <div>
      <Counter initial_Value={0}></Counter>
      <Counter initial_Value={1}></Counter>
      <Counter initial_Value={2}></Counter>
    </div>
  }

export default CounterParent