import React, {Component} from 'react'
import imgUser from "../../assets/img/header_user.png";
import imgCart from "../../assets/img/header_cart.png";
import logo from "../../assets/img/logoPycozza.png";
import './Header.css'
import {NavLink} from 'react-router-dom'
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
        
        return(
            <div className="header">
                <NavLink to='/'>
                    <img id="logo" src={logo} alt=""/>
                </NavLink>
                <h2 id="logoname">PYCOZZA</h2>
                <img src={imgUser} alt=""/>
                <NavLink to='/registerpage'><div>SIGN UP</div></NavLink>
                <span>/</span>
                <NavLink to='/loginpage'><div>SIGN IN</div></NavLink>
                <img src={imgCart} alt=""/>
                <div style={{marginRight:"20px"}} id={id}
                    onClick={this.menuTransformHandler}>
                    <div id="bar1"></div>
                    <div id="bar2"></div>
                    <div id="bar3"></div>
                </div>
            </div>
        );
    }
}

export default Header;