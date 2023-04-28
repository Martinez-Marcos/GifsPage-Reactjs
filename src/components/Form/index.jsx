import React, { useState } from "react";

export default function Form(){ 
const [keyword,setkeyword] = useState("")

const handleSubmit= (event)=>{
    event.preventDeafult()
 
}

const handleChange = (event)=>{
    setkeyword(event.target.value)
}

return(
    <form onSubmit={handleSubmit}>
        <input type="text" value={keyword}/>
        <button>Buscar!</button>
    </form>
)
}