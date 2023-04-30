import React, {useState,useEffect}from "react";
import getGifs from '../../services/getGif'
import useGifs from "../../hooks/useGifs";

export default function ShowResults({params}) {
  const {keyword} = params
  const [loading,gifs,error]=useGifs(getGifs(keyword))
  
  if (error) return <p>Error al cargar los gifs</p>;

  return (
    loading?<p>cargando</p>:
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
