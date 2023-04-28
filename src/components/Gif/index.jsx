import React from "react";
import "./gif.css";

export default function Gif({ title, url, id }) {
  return (
    <a href={`#${id}`} className="gif">
      <img src={url} alt={title} />
      <p>{title}</p>
    </a>
  );
} 
