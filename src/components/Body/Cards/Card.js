import React, { useState } from "react";
import "./Card.css";

const Card = ({ title, frontContent, backContent, image, demo, file }) => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="card-container">
      <div className="card">
        {show && (
          <figure className="front" onClick={toggleShow}>
            <img className="image" src={image} alt="netflix" />
            <h1>{title}</h1>
            <p>{frontContent}</p>
          </figure>
        )}
        {!show && (
          <figure className="back" onClick={toggleShow}>
            <div className="button-container">
              <a className="button" href={file}>
                File
              </a>
              {demo && (
                <a className="button" href={demo}>
                  Demo
                </a>
              )}
            </div>
          </figure>
        )}
      </div>
    </div>
  );
};

export default Card;
