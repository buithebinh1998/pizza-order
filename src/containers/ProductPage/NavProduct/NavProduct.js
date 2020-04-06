import React from 'react'
import './NavProduct.css'
import {NavLink} from 'react-router-dom'
const NavProduct = (props) => (
    <div className="nav-product">
        <ul>
            <NavLink to='/category/pizza'><li>PIZZA</li></NavLink> 
            <NavLink to='/category/sidedish'><li>SIDE DISH</li></NavLink>
            <NavLink to='/category/beverage'><li>BEVERAGE</li></NavLink>
            <NavLink to='/category/dessert'><li>DESSERT</li></NavLink>
        </ul>
    </div>
)

export default NavProduct;






