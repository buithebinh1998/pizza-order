import React, {Component} from 'react'
import imgUser from "../../assets/img/header_user.png";
import imgCart from "../../assets/img/header_cart.png";
import logo from "../../assets/img/logoPycozza.png";
import './Header.css'
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
                <img id="logo"src={logo} alt=""/>
                <img src={imgUser} alt=""/>
                <div>SIGN UP</div>
                <span>/</span>
                <div>SIGN IN</div>
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