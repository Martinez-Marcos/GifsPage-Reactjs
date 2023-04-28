import React, {useState,useEffect}from "react";
import getGifs from '../../services/getGif'

export default function SearchResults({params}) {
  const [gifs, setGifs] = useState([]);
  let {keyword}= params

  useEffect(function () {
    getGifs(keyword)
        .then((gifs) => setGifs(gifs));
  }, [keyword]);
} 
