import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, img, text1, text2, text3, text4 }) => {
  return (
    <div className="skillcards">
      <div className="skillcard">
        <div className="skillcard-container">
          <img className="skillcard-img" src={img} alt="test" />
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{text4}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
