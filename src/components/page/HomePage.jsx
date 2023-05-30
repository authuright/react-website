import React from "react";
import NavBar from "../navbar/NavBar";
import AboutSection from "../about/AboutSection";
import Footer from "../footer/Footer";
// import { useNavigate } from "react-router-dom";
const HomePage = () => {
  // const navigate = useNavigate();
  return (
    <div className="App">
      <NavBar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage;
