import React from "react";
import Video from "../../Videos/Blue.mp4";
import { Link } from "react-scroll";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <video
          className="video"
          autoPlay
          loop
          muted
          height="800"
          src={Video}
          type="video/mp4"
        ></video>
        <div className="title">
          <h1>Kenton Olsen</h1>
          <h5>Front End Developer</h5>
          <div className="button-container">
            <Link
              className="button"
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
            >
              Projects
            </Link>
            <a
              className="button"
              href="https://github.com/kenton682?tab=repositories"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
