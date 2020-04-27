import React, {useState, useContext} from 'react'
import imgCart from "../../assets/img/header_cart.png";
import logo from "../../assets/img/logoPycozza.png";
import './Header.css'
import {NavLink} from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Context } from '../../context/Context/Context';

const Header = () => {
    const [menuState, setMenuState] = useState(false);
    const [context] = useContext(Context);

    const menuTransformHandler = () => {
        const currentState = menuState;
        setMenuState(!currentState);
    };

    const id = menuState ? "change" : "";
    const sideBarClassName = menuState ? "SideDrawer Open" : "SideDrawer Close";
    return(
        <div>
            <div className="header">
                <NavLink to='/'>
                    <img className="logo" src={logo} alt=""/>
                </NavLink>
                <div><NavLink to='/signup'>SIGN UP</NavLink></div>
                <span className="header-span">/</span>
                <div><NavLink to='/signin'>SIGN IN</NavLink></div>
                <div className="cart-header">
                    <img src={imgCart} alt=""/>
                    <span className="cart-header-span">{context.cart.length}</span>
                </div>
                <div id={id}
                    onClick={menuTransformHandler}>
                    <div id="bar1"></div>
                    <div id="bar2"></div>
                    <div id="bar3"></div>
                </div>
            </div>
            <Sidebar classes={sideBarClassName}/>
        </div>
    );
}

export default Header;