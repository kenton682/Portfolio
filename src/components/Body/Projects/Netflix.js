import React from "react";
import Card from "../Cards/Card.js";

const Netflix = () => {
  return (
    <div>
      <Card
        title="Netflix Clone"
        frontContent="A copy of the netflix website built using React, JavaScript, CSS, HTML, Node Js, and hosted on Firebase"
        backContent=""
        image="./images/netflix.jpg"
        demo="https://netflix-clone-e50af.web.app/"
        file="https://github.com/kenton682/netflix-clone"
      />
    </div>
  );
};

export default Netflix;
