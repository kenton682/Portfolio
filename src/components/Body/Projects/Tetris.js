import React from "react";
import Card from "../Cards/Card.js";

const Tetris = () => {
  return (
    <div>
      <Card
        title="Tetris"
        frontContent="A simple recreation of the classic game tetris created using HTML/CSS and JavaScript"
        backContent=""
        image="./images/Tetris.png"
        file="https://github.com/kenton682/Tetris"
      />
    </div>
  );
};

export default Tetris;
