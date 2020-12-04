import React from "react";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-title">SKILLS</div>
      <div className="skills-content">
        <SkillCard
          title={"FRONT END"}
          img={"images/frontend.png"}
          text1={"JavaScript"}
          text2={"HTML5"}
          text3={"CSS | SASS"}
          text4={"REACT | REDUX"}
        />
        <SkillCard
          title={"DATABASE"}
          img={"images/database.jpg"}
          text1={"mySQL"}
          text2={"MongoDB"}
          text3={"FireBase"}
          text4={"Express"}
        />
        <SkillCard
          title={"SERVER"}
          img={"images/server.jpg"}
          text1={"NodeJS"}
          text2={"Python"}
          text3={"FireBase"}
          text4={"PostgreSQL"}
        />
      </div>
    </div>
  );
};

export default Skills;
