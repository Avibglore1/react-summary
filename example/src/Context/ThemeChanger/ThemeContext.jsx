import React, { useState } from 'react'
import { useContext } from 'react'

const ThemeContext = React.createContext();

export function useDarkTheme(){
    return useContext(ThemeContext);
}

function ThemeWrapper({children}){
    const [isDark, updateTheme] = useState(false);
    const handleToggle = () =>{
        updateTheme(!isDark);
    }
    return <ThemeContext.Provider value={{isDark,handleToggle}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeWrapper;