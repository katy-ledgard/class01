import React from "react";
import "./Header.css";

export default function Header({ handleBeastData }) {
  return (
    <header className="header">
      <h1>Beast World</h1>
      <form className="hornForm">
        <label htmlFor="hornInput" className="hornLabel">
          Find beasts by their number of horns.
        </label>
        {/* set an onChange event listener with function that is passed down (handleBeastData)*/}
        <select id="hornInput" name="hornsSelected" onChange={handleBeastData}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
    </header>
  );
}
