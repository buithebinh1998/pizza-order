import React from 'react'
import './NavProduct.css'
import {NavLink} from 'react-router-dom'
const NavProduct = (props) => (
    <div className="nav-product">
        <ul>
            <li><NavLink to='/category/pizza'>PIZZA</NavLink></li> 
            <li><NavLink to='/category/sidedish'>SIDE DISH</NavLink></li>
            <li><NavLink to='/category/beverage'>BEVERAGE</NavLink></li>
            <li><NavLink to='/category/dessert'>DESSERT</NavLink></li>
        </ul>
    </div>
)

export default NavProduct;






