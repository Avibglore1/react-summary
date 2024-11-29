import React, { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Context/ThemeChanger/Home'
import PageNotFound from './Context/ThemeChanger/PageNotFound'

const ThemeWrapper = React.createContext();

function App() {
  const [isDark, updateTheme] = useState(false);
  function handleToggle(){
    updateTheme(!isDark)
  }
  return (
    <>
      <button onClick={handleToggle}>Toggle Button</button>
      <ThemeWrapper.Provider value={isDark}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </ThemeWrapper.Provider>
      
    </>
  )
}
export {ThemeWrapper}
export default App
