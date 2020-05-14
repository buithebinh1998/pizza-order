import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import SignUpForm from "../../../components/AuthenticationForm/SignUpForm/SignUpForm";
import backgroundAuthen from "../../../assets/img/bg.png";

const SignUpPage = () => {
  
    return (
      <div style={{ backgroundImage: `url(${backgroundAuthen})` }}>
        <Header />
        <div id="spacer"></div>
        <SignUpForm />
        <Footer />
      </div>
    );
}

export default SignUpPage;
