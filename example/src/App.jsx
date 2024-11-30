import React, { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Context/ThemeChanger/Home'
import PageNotFound from './Context/ThemeChanger/PageNotFound'
import { useDarkTheme } from './Context/ThemeChanger/ThemeContext'



function App() {
 const {handleToggle} = useDarkTheme();
  return (

    <>
      <button onClick={handleToggle}>Toggle Button</button>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </>
  )
}
export default App
