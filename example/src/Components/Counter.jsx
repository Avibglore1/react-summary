import React from 'react'
import { useState } from 'react';

function Counter(props){
    const [value,setValue] = useState(props.initial_Value);
    const handleIncrement = () =>{
      if (value==10){
        return;
      }
      setValue(value+1)
    }
  
  const handleDecrement = () =>{
    if(value==-3){
      return;
    }
    setValue(value-1)
  }
  return (
    <>
      <div>{value}</div>
      <button onClick={handleIncrement}>+Plus</button>
      <button onClick={handleDecrement}>-Minus</button>
    </>
  )
  }

export default Counter