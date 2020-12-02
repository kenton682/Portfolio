import React, { useEffect } from "react";
import Body from "./components/Body/Body.js";
import Footer from "./components/Footer/Footer.js";
import HeroSection from "./components/HeroSection/HeroSection.js";
import Logo from "./components/Logo/Logo.js";
import { animateScroll as scroll } from "react-scroll";
import "./App.css";

function App() {
  useEffect(() => {
    scroll.scrollToTop();
  });
  return (
    <>
      <Logo />
      <HeroSection />
      <Body />
      <Footer />
    </>
  );
}

export default App;
