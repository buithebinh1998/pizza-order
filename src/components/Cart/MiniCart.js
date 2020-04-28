import React, {useContext} from 'react'
import './MiniCart.css'
import imgCart from "../../assets/img/header_cart.png";
import { Context } from '../../context/Context/Context';

const MiniCart = () => {
    const {cart, totalPrice} = useContext(Context);
    return(
        <div className="minicart-wrapper">
            <div className="minicart">
                <img src={imgCart} alt=""/>
                <span className="minicart-span">{cart.length}</span>
            </div>
            <div className="minicart-total">Total price: {Intl.NumberFormat('de-DE').format(totalPrice)}Đ</div>
            <button className="minicart-checkout">Check out</button>
        </div>
    )
}

export default MiniCart;