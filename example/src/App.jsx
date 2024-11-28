import { useState } from 'react'
import './App.css'
import HeadingParent from './Components/HeadingParent'
import ShoppingCart from './Components/ShoppingCart'

function Counter(){
  const [value,setValue] = useState(0);
}

function App() {
  return (
    <>
      <h1>App Component</h1>
      {/* <HeadingParent></HeadingParent> */}
      <ShoppingCart></ShoppingCart>
    </>
  )
}

export default App
