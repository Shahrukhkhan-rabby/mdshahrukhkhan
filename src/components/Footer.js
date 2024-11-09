import "./FooterStyles.css";
import React from "react";
import profile from "../assets/profile.png";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Manigram, Bagha, Rajshahi</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +8801787-144607
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              shahrukhkhan3418198@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me Md Shahrukh Khan. President of PeaceIT. I'm passionate
            about building with modern web technologies like React, Next.js,
            Node.js, MongoDB, and Express, and I love the flexibility of SASS,
            CSS, Bootstrap, and Tailwind for styling. They make development both
            powerful and enjoyable!
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/shahrukhkhan.rabby/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://x.com/shahrukh_khan71"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahrukh-khan-5858a6320/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* Profile picture above the copyright section */}
      <div className="footer-image-container">
        <img src={profile} alt="" className="footer-image" />
      </div>
      {/* Dynamic copyright section */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Md. Shahrukh Khan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
