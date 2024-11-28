import { useState } from "react";


function InputBox(){
    const[content, setContent] = useState('');


    function handleChange(e){
        const updatedValue = e.target.value;
        setContent(updatedValue);
    }

    return <div>
        <input type='text' value={content} onChange={handleChange}></input>
    </div>
}

export default InputBox