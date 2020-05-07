import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import background from "../../assets/img/bg.png";
import "./ContactPage.css";
const ContactPage = () => {
  return (
    <div
      className="ContactPage"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <div id="spacer"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
