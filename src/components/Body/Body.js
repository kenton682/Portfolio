import React from "react";
import Skills from "./Skills/Skills.js";
import Netflix from "./Projects/Netflix.js";
import Snake from "./Projects/Snake.js";
import Tetris from "./Projects/Tetris.js";
import "./Body.css";

const Body = () => {
  return (
    <div className="body-container">
      <Skills />
      <div className="projects-title">PROJECTS</div>
      <div className="cards" id="projects">
        <Netflix />
        <Snake />
        <Tetris />
      </div>
      <div className="cards">
        <Netflix />
        <Netflix />
        <Netflix />
      </div>
    </div>
  );
};

export default Body;
