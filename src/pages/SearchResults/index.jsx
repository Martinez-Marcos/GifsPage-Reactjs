import React from "react";
import ShowResults from "../../components/ShowResults";

export default function SearchResults({keyword}){
    console.log(keyword);
    return (
        <>
            <p>Search</p>
            <ShowResults keyword={keyword} ></ShowResults>
        </>
    ) 
}