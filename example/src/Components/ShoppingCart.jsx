import React from 'react'

function ShoppingCart(){
    const cart = ['Apple','Oranges','Broccoli', 'Grapes'];
    return <ul>
      {cart.map((elem,index)=>{
        return <li key={index}>
          <div>{elem}</div>
          <button>Click</button>
        </li>
      })}
    </ul>
  }

export default ShoppingCart