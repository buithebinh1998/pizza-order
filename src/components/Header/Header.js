import React from 'react'
import imgUser from "../../assets/img/header_user.png";
import imgCart from "../../assets/img/header_cart.png";
import logo from "../../assets/img/logoPycozza.png";
import './Header.css'
const Header = (props) => {
    return(
        <div className="header">
            <img id="logo"src={logo} alt=""/>
            <img src={imgUser} alt=""/>
            <div>SIGN UP</div>
            <span>/</span>
            <div>SIGN IN</div>
            <img src={imgCart} alt=""/>
            <div>
                <div id="menu-button"></div>
                <div id="menu-button"></div>
                <div id="menu-button"></div>
            </div>
        </div>
    );
}

export default Header;