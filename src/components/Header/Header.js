import React, { useState, useContext } from "react";
import imgCart from "../../assets/img/header_cart.png";
import logo from "../../assets/img/logoPycozza.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Context } from "../../context/Context/Context";
import swal from 'sweetalert';

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const { cart, isAuthenticated, user, checkAuthenticated } = useContext(
    Context
  );

  const menuTransformHandler = () => {
    const currentState = menuState;
    setMenuState(!currentState);
  };

  const id = menuState ? "change" : "";
  const sideBarClassName = menuState ? "SideDrawer Open" : "SideDrawer Close";

  const AuthenticationHeader = isAuthenticated ? (
    <>
      <div>
        <NavLink to='/order-history'>{user.fullName}</NavLink>
      </div>
      <span className="header-span">/</span>
      <div>
        <a
          href="/"
          onClick={(e) => {
            checkAuthenticated(false);
            e.preventDefault();
            swal({
                title: "LOG OUT SUCCESSFULLY!",
                icon: "success",
                timer: 3000
            });
            localStorage.setItem("user", JSON.stringify([]));
            localStorage.setItem("isAuthenticated", JSON.stringify(false));
          }}
        >
          LOG OUT
        </a>
      </div>
    </>
  ) : (
    <>
      <div>
        <NavLink to="/signup">SIGN UP</NavLink>
      </div>
      <span className="header-span">/</span>
      <div>
        <NavLink to="/signin">SIGN IN</NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="header">
        <NavLink to="/">
          <img className="logo" src={logo} alt="" />
        </NavLink>
        {AuthenticationHeader}
        <div className="cart-header">
          <NavLink to="/cart" id="cart-header-link">
            <img src={imgCart} alt="" />
            <span className="cart-header-span">{cart.length}</span>
          </NavLink>
        </div>
        <div id={id} onClick={menuTransformHandler}>
          <div id="bar1"></div>
          <div id="bar2"></div>
          <div id="bar3"></div>
        </div>
      </div>
      <Sidebar classes={sideBarClassName} />
    </div>
  );
};

export default Header;
