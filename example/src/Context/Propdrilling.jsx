import React, { useContext } from 'react'
const ContextWrapper=React.createContext()

function Propdrilling() {
    const value=2000
  return (
    <>
        <div>Propdrilling</div>
        <ContextWrapper.Provider value={value}><Granparent></Granparent></ContextWrapper.Provider>
    </>
    
  )
}
function Granparent(){
    return(
        <>
            <div>GrandParent</div>
            <Parent></Parent>
            
        </> 
    )
}
function Parent(){
    return(
        <>
            <div>Parent</div>
            <Children></Children>
        </>
    )
}
function Children(){
    const message=useContext(ContextWrapper)
    return(
        <>
            <div>Children</div>
            <div>message: {message}</div>
        </>
    )
}
export default Propdrilling