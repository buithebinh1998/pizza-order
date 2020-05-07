import React from "react";
import "./NavProduct.css";
import { NavLink } from "react-router-dom";
const NavProduct = (props) => (
  <div className="nav-product">
    <ul>
      <li>
        <NavLink to="/pizza">PIZZA</NavLink>
      </li>
      <li>
        <NavLink to="/sidedish">SIDE DISH</NavLink>
      </li>
      <li>
        <NavLink to="/beverage">BEVERAGE</NavLink>
      </li>
      <li>
        <NavLink to="/dessert">DESSERT</NavLink>
      </li>
    </ul>
  </div>
);

export default NavProduct;
