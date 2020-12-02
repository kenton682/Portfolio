import React from "react";
import Skills from "./Skills/Skills.js";
import Netflix from "./Projects/Netflix.js";
import "./Body.css";

const Body = () => {
  return (
    <div className="body-container" id="projects">
      <Skills />
      <Netflix />
    </div>
  );
};

export default Body;
