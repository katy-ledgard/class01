import React from "react";
import HornedBeast from "../HornedBeast/HornedBeast";
import "./Main.css";

export default function Main({ beastData, handleBeastModal }) {
  return (
    <main className="main gridContainer">
      {beastData.map((beast, key) => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          imgUrl={beast.image_url}
          description={beast.description}
          beastObject={beast}
          handleBeastModal={handleBeastModal}
        />
      ))}
    </main>
  );
}
