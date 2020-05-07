import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Policy from "../../components/Policy/Policy";
import background from "../../assets/img/bg.png";
import "./PolicyPage.css";
const PolicyPage = () => {
  return (
    <div
      className="PolicyPage"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <div id="spacer"></div>
      <Policy />
      <Footer />
    </div>
  );
};

export default PolicyPage;
