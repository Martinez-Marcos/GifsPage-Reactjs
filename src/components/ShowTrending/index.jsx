import React from "react";
import getTrending from "../../services/getTrending";
import useGifs from "../../hooks/useGifs";
import Gif from "../../components/Gif";


export default function ShowTrending(){
    const [loading,gifs,error]= useGifs(getTrending);
// next:create error mensajes or images
    return(
        error?<p>Error al cargar los gifs</p>:
        gifs.map(({ id, title, url }) =>(
            <Gif 
            key={id} 
            id={id}
            title={title} 
            url={url} 
            />
            ))      
    ) 

}