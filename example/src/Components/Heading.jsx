import React from 'react'

function Heading(props){
    const name = props.name;
    const age = props.age;
    return <h1>Hi I am {name} and I am {age} years old</h1>
  }

export default Heading