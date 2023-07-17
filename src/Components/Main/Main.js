import React from "react";
import HornedBeast from "../HornedBeast/HornedBeast";
import Rhino from "../../Images/rhino.jpg";
import Bison from "../../Images/bison.jpg";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <HornedBeast
        title={"Rhino"}
        imgUrl={Rhino}
        description={"A grey animal with one horn."}
      />
      <HornedBeast
        title={"Bison"}
        imgUrl={Bison}
        description={"A brown animal with two horns"}
      />
    </div>
  );
}
