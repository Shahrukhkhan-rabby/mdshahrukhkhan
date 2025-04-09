import React from "react";
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import HeroImg2 from "../components/HeroImg2.jsx";
import AboutContent from "../components/AboutContent.jsx";

const About = () => {
    return (
      <div>
        <Navbar />
        <HeroImg2 heading="ABOUT." text="Im a passionate Full Stack Developer." />
        <AboutContent />
        <Footer />
      </div>
    );
};

export default About;