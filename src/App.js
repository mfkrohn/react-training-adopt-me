import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "bird bird"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "catcat"
    })
  ]);

render(React.createElement(App), document.getElementById("root"));
