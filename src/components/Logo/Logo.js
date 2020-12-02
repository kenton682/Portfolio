import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./Logo.css";

const Logo = () => {
  const toggleScroll = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="logo">
      <div className="logo-item">
        <i class="fab fa-korvue" onClick={toggleScroll}></i>
      </div>
    </div>
  );
};

export default Logo;
