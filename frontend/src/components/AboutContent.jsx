import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

import React from 'react'

export const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a full-stack developer with expertise in React, Next.js, Node.js,
          MongoDB, and Express, dedicated to creating responsive and secure
          websites tailored to client needs.
        </p>
              <Link to="/contact">
              <button className="btn">Contact</button>
              </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent
