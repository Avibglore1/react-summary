import React, { useContext } from 'react'

import { useDarkTheme } from './ThemeContext';

function Footer() {
    console.log('rendered footer');
    console.log('``````````````````````');
    return(
      <div style={{border:'1px solid', padding:'1rem', margin: '1rem'}}>
          <div>Footer</div>
          <div>↓↓</div>
          <Option></Option>
          <Option></Option>
          <Option></Option>
      </div>
    )
  }
  
  function Option(){

      const {isDark} = useDarkTheme();
      return <div className={`${isDark?'dark':'light'}`}>Option</div>
  }

export default Footer