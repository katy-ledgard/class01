import React, { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  const [faves, setFaves] = useState(0);

  function handleFaveClicks() {
    setFaves(faves + 1);
  }

  return (
    <div className="beastContainer">
      <section className="hornedBeast">
        <h2>{title}</h2>
        <img
          // onClick={handleFaveClicks}
          src={imgUrl}
          alt={description}
          title={title}
        ></img>
        <div className="beastInfo">
          <p>{description}</p>
          <p className="clickHeart">Click the heart to favourite the image.</p>
          <p>
            <span className="heart" onClick={handleFaveClicks}>&#10084;</span> {faves}
          </p>
        </div>
      </section>
    </div>
  );
}
