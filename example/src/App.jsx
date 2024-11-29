import { useState } from 'react'
import './App.css'
import HeadingParent from './Components/HeadingParent'
import ShoppingCart from './Components/ShoppingCart'
import Counter from './Components/Counter'
import CounterParent from './Components/CounterParent'
import InputBox from './Components/InputBox'
import Propdrilling from './Context/Propdrilling'



function App() {
  return (
    <>
      <h1>App Component</h1>
      <Propdrilling></Propdrilling>
    </>
  )
}

export default App
