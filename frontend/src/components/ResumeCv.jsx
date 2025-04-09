import React, { useState } from "react";
import "./ResumeCvStyles.css";

const ResumeCv = () => {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div className="resume-box">
      <div className="edu-pro-exp-bar">
        <div
          className={`tab ${activeSection === "education" ? "active" : ""}`}
          onClick={() => setActiveSection("education")}
        >
          <h2>Education</h2>
        </div>
        <div
          className={`tab ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => setActiveSection("skills")}
        >
          <h2>Professional Skills</h2>
        </div>
        <div
          className={`tab ${activeSection === "experience" ? "active" : ""}`}
          onClick={() => setActiveSection("experience")}
        >
          <h2>Experience</h2>
        </div>
      </div>
      <div className="content">
        {activeSection === "education" && (
          <div className="section-content">
            <h3>Educational Qualifications</h3>
            <div className="card-container">
              <div className="card education-card">
                <h4>Bachelor of Arts in English</h4>
                <p>Daffodil International University - (2019-2023)</p>
              </div>
              <div className="card education-card">
                <h4>H.S.C. Higher Secondary Certificate</h4>
                <p>Rajshahi University School - (2014-2016)</p>
                <h5 className="highlight">GPA 5.00</h5>
                <p>
                  I achieved a GPA of 5 out of 5 in my Higher Secondary
                  Certificate (HSC) exams in the Science stream from Rajshahi
                  University School, showcasing my dedication and strong
                  academic performance.
                </p>
              </div>
              <div className="card education-card">
                <h4>S.S.C. Secondary School Certificate</h4>
                <p>Sardah Govt. Pilot High School - 2014</p>
                <h5 className="highlight">GPA 5.00 (Golden)</h5>
                <p>
                  I achieved a GPA of 5 out of 5 in my Secondary School
                  Certificate (SSC) exams in the Science stream from Sardah
                  Govt. Pilot High School, reflecting my commitment and strong
                  academic achievement.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeSection === "skills" && (
          <div className="section-content">
            <h3>Professional Skills</h3>
            <div className="skills">
              <div className="skill-item">
                <h4 className="progress-bar-h4">HTML</h4>
                <div className="progress-bar">
                  <div className="html">
                    <span>93%</span>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <h4 className="progress-bar-h4">CSS</h4>
                <div className="progress-bar">
                  <div className="css">
                    <span>83%</span>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <h4 className="progress-bar-h4">JavaScript</h4>
                <div className="progress-bar">
                  <div className="javaScript">
                    <span>80%</span>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <h4 className="progress-bar-h4">React.js Frontend Framework</h4>
                <div className="progress-bar">
                  <div className="react">
                    <span>87%</span>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <h4 className="progress-bar-h4">Next.js JavaScript</h4>
                <div className="progress-bar">
                  <div className="next">
                    <span>77%</span>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <h4 className="progress-bar-h4">Node.js Backend Framework</h4>
                <div className="progress-bar">
                  <div className="node">
                    <span>73%</span>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <h4 className="progress-bar-h4">MongoDB</h4>
                <div className="progress-bar">
                  <div className="mongodb">
                    <span>75%</span>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <h4 className="progress-bar-h4">Postman</h4>
                <div className="progress-bar">
                  <div className="postman">
                    <span>79%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === "experience" && (
          <div className="section-content">
            <h3>Experience</h3>
            {/* Add experience items here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeCv;
