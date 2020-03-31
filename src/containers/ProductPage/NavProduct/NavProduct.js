import React from 'react'
import './NavProduct.css'
import {NavLink} from 'react-router-dom'
const NavProduct = (props) => (
    <div className="nav-product">
        <ul>
            <NavLink to='/pizzapage'><li>PIZZA</li></NavLink> 
            <li><NavLink to='/sidedishpage'>SIDE DISH</NavLink> </li>
            <li><NavLink to='/pizzapage'>BEVERAGE</NavLink> </li>
            <li><NavLink to='/pizzapage'>DESSERT</NavLink> </li>
        </ul>
    </div>
)

export default NavProduct;






