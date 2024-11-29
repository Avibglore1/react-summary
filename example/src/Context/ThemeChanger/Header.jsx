import React, { useContext } from 'react'
import { ThemeWrapper } from '../../App';

function Header() {
  console.log('rendered header');
  console.log('``````````````````````');
  return(
    <div style={{border:'1px solid', padding:'1rem', margin: '1rem'}}>
        <div>Header</div>
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

export default Header