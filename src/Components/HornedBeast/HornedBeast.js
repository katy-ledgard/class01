import React, { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  const [faves, setFaves] = useState(0);

  function handleFaveClicks() {
    setFaves(faves + 1);
  }

  return (
    <div className="hornedBeast">
      <h2>{title}</h2>
      <img
        onClick={handleFaveClicks}
        src={imgUrl}
        alt={description}
        title={title}
      ></img>
      <p>{description}</p>
      <p>&#10084; {faves}</p>
    </div>
  );
}
