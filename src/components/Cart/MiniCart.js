import React, {useContext} from 'react'
import './MiniCart.css'
import imgCart from "../../assets/img/header_cart.png";
import { Context } from '../../context/Context/Context';
import {withRouter} from 'react-router-dom'
const MiniCart = (props) => {
    const {cart, totalPrice, handleCheckOut1} = useContext(Context);
    let totalMiniCart = totalPrice;
    if(cart.length===0) totalMiniCart=0;
    return(
        <div className="minicart-wrapper">
            <div className="minicart">
                <img src={imgCart} alt=""/>
                <span className="minicart-span">{cart.length}</span>
            </div>
            <div className="minicart-total">Total price: {Intl.NumberFormat('de-DE').format(totalMiniCart)}Đ</div>
            <button className="minicart-checkout" onClick={()=>handleCheckOut1(props)}>Check out</button>
        </div>
    )
}

export default withRouter(MiniCart);