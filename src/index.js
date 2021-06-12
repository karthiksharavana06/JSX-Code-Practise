//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My fav Food</h1>
    <ul>
      <li>Biriyani</li>
      <li>Shawarma</li>
      <li>Grill</li>
    </ul>
  </div>,
  document.getElementById("root")
);
