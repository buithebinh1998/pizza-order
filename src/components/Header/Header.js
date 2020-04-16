import React, {Component} from 'react'
import imgCart from "../../assets/img/header_cart.png";
import logo from "../../assets/img/logoPycozza.png";
import './Header.css'
import {NavLink} from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
class Header extends Component {
    state = {
        menuState: false,
    }

    menuTransformHandler = () => {
        const currentState = this.state.menuState;
        this.setState({menuState: !currentState});
    };

    render(){
        const id = this.state.menuState ? "change" : "";
        const sideBarClassName = this.state.menuState ? "SideDrawer Open" : "SideDrawer Close";
        return(
            <div>
                <div className="header">
                    <NavLink to='/'>
                        <img className="logo" src={logo} alt=""/>
                    </NavLink>
                    <div><NavLink to='/signup'>SIGN UP</NavLink></div>
                    <span>/</span>
                    <div><NavLink to='/signin'>SIGN IN</NavLink></div>
                    <img src={imgCart} alt=""/>
                    <div id={id}
                        onClick={this.menuTransformHandler}>
                        <div id="bar1"></div>
                        <div id="bar2"></div>
                        <div id="bar3"></div>
                    </div>
                </div>
                <Sidebar classes={sideBarClassName}/>
            </div>
        );
    }
}

export default Header;