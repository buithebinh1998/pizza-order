import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import background from "../../assets/img/bg.png";

const AboutPage = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div id="spacer"></div>
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
