import React, { useState } from "react";

import { useLocation } from "wouter";

export default function Form(){ 
const [keyword,setkeyword] = useState("");
const [location, setlocation] = useLocation();


const handleSubmit= (event)=>{
    event.preventDeafult()
    const keyword= event.search.value;
    setlocation(`/search/${keyword}`);

}

const handleChange = (event)=>{
    setkeyword(event.target.value)
}

return(
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="search" type="text" value={keyword}/>
        <button>Buscar!</button>
    </form>
)
}