import React from "react";
import "./Card.css";

const Card = ({ title, frontContent, backContent, image, demo, file }) => {
  return (
    <div className="card-container">
      <div className="card">
        <figure className="front">
          <img className="image" src={image} alt="netflix" />
          <h1>{title}</h1>
          <p>{frontContent}</p>
        </figure>
        <figure className="back">
          <a className="button" href={demo}>
            demo
          </a>
          <a className="button" href={file}>
            File
          </a>
        </figure>
      </div>
    </div>
  );
};

export default Card;
