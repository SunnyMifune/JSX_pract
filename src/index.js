//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const name = "Sunny";
const currentDate = new Date();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentDate.getFullYear}</p>
  </div>,
  document.getElementById("root")
);

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
