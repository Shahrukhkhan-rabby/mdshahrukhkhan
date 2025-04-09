import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HeroImg2 from "../components/HeroImg2.jsx";
import Form from "../components/Form.jsx";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="How can we connect?" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
