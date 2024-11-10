import "./HeroImgStyles2.css";
import React, { Component } from "react";

class HeroImg2 extends Component {
    render() {
        return (
          <div className="hero-img">
            <div className="heading">
              <h1>My Resume</h1>
              <p>Here are some of my specialties</p>
              {/* Download Resume Button */}
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <a
                  href="https://docs.google.com/document/d/1uKpnvMUT0eo0izAj7xkAbr-jC4HpNvRhEpiz4hy1HvE/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        );
    }
};

export default HeroImg2
