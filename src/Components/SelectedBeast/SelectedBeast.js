import React from "react";
import "./SelectedBeast.css";

export default function SelectedBeast({ beastModalContent, closeBeastModal }) {
  return (
    <div className="selectedBeast">
      <div className="sbContainer">
        <h2>{beastModalContent.title}</h2>
        <img
          src={beastModalContent.image_url}
          alt={beastModalContent.title}
          title={beastModalContent.title}
        ></img>
        <p>{beastModalContent.description}</p>
        <span className="cross" onClick={closeBeastModal}>
          X
        </span>
      </div>
    </div>
  );
}
