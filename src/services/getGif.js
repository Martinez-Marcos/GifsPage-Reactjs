
import { searchURL as apiURL, limit, apiKey } from "./servicesGifs";

export default function getGifs (keyword = ``){
    return fetch(`${apiURL}?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`)
      .then(res=>res.json())
      .then(resp=>{
        const {data} = resp;
        const gifs = data.map(data=> {
          const {id, title, images} = data;  
          const url =images.downsized_medium.url
          return {id,title,url}});
        return gifs;
      })
} 