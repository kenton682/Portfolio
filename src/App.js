import React from "react";
import Body from "./components/Body/Body.js";
import Footer from "./components/Footer/Footer.js";
import HeroSection from "./components/HeroSection/HeroSection.js";
import Logo from "./components/Logo/Logo.js";

import "./App.css";

function App() {
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
