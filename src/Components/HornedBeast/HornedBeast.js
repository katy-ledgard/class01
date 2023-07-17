import React from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  return (
    <div className="hornedBeast">
      <h2>{title}</h2>
      <img src={imgUrl} alt={description} title={title}></img>
      <p>{description}</p>
    </div>
  );
}
