import React from "react";
import Skills from "./Skills/Skills.js";
import Netflix from "./Projects/Netflix.js";
import "./Body.css";

const Body = () => {
  return (
    <div className="body-container">
      <Skills />
      <div className="projects-title">Projects</div>
      <div className="cards" id="projects">
        <Netflix />
        <Netflix />
        <Netflix />
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
