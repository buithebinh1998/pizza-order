import React from "react";
import "./Footer.css";
import tel from "../../assets/img/tel.png";
import visa from "../../assets/img/visa.png";
import { NavLink } from "react-router-dom";
const Footer = () => (
  <footer>
    <div>
      &copy; 2020 PYCOZZA VIETNAM COMPANY |{" "}
      <NavLink to="/policy">PRIVACY POLICY</NavLink>{" "}
    </div>
    <div>
      <div className="hotline">
        <div>HOTLINE DELIVERY</div>
      </div>
      <div className="img-container">
        <a href="tel:1900-2707">
          <img src={tel} alt="" />
        </a>
      </div>
    </div>

    <div className="img-container-corner">
      <img src={visa} alt="" />
    </div>
  </footer>
);
export default Footer;
