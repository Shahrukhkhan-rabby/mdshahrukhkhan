import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg3 from "../components/HeroImg3";
import ResumeCv from "../components/ResumeCv";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImg3  />
      <ResumeCv />
      <Footer />
    </div>
  );
};

export default Resume;
