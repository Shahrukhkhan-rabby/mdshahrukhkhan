import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";


const HeroImg = () => {
    return (
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
                <p>Welcome to My Creative Corner</p>
                <h4>I'm Md. Shahrukh Khan</h4>
                <h1>Full Stack Developer.</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
        </div>
      </div>
    );
};

export default HeroImg;