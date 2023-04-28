import React, {useState,useEffect}from "react";
import getTrending from "../../services/getTrending";

export default function ShowTrending() {
  const {trending, setTrending} = useState([])

  useEffect(function () {
    getTrending()
        .then((gifs) => setTrending(gifs));
  }, []);
  return(
    trending.map(({ id, title, url }) => (
      <Gif 
          key={id} 
          title={title} 
          url={url} 
          />
    ))
  )

   
}
