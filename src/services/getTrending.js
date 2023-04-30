import services from "./servicesGifs.js";

const { trendingURL: apiURL, limit, apiKey} = services;

export default function getTrending (rating ='g'){  
    return fetch(`${apiURL}?api_key=${apiKey}&limit=${limit}&offset=0&rating=${rating}&lang=en`)
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