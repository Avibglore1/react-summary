import React, { useContext } from 'react'
import { ThemeWrapper } from '../../App';

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
      const isDark = useContext(ThemeWrapper);
      return <div className={`${isDark?'dark':'light'}`}>Option</div>
  }

export default Footer