import React from 'react'
import './NavProduct.css'
import {NavLink} from 'react-router-dom'
const NavProduct = (props) => (
    <div className="nav-product">
        <ul>
            <NavLink to='/pizzapage'><li>PIZZA</li></NavLink> 
            <NavLink to='/sidedishpage'><li>SIDE DISH</li></NavLink>
            <NavLink to='/beveragepage'><li>BEVERAGE</li></NavLink>
            <NavLink to='/dessertpage'><li>DESSERT</li></NavLink>
        </ul>
    </div>
)

export default NavProduct;






