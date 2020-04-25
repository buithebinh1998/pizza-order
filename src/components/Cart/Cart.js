import React, {useContext} from 'react'
import './Cart.css'
import {CartContext} from '../../context/CartContext/CartContext'

const Cart = (props) => {
    let totalPrice = 0;
    const [cart, setCart] = useContext(CartContext);
    const loadCart = cart.map(item => {
        totalPrice+=item.price;
        const showPrice = item.price/1000 + ".000Đ";
        return(
            <div className="cart-info">
                <div className="cart-info-name">{item.name}</div>
                <div className="cart-info-price-wrapper">
                    <button className="cart-quantity-button">-</button>
                    <div className="cart-info-quantity">{item.quantity}</div>
                    <button className="cart-quantity-button">+</button>
                    <div className="cart-info-price">{showPrice}</div>
                </div>
                <button className="cart-remove-button">Remove</button>
            </div>
        )
    });

    return(
        <div className="cart">
            <div>
                <div className="cart-title">ORDER INFORMATION</div>
                <div className="cart-load">
                    {loadCart}
                </div>
                <div className="total-wrap">
                    <div className="cart-total">Total:</div>
                    <div className="cart-price">{totalPrice+"Đ"}</div>
                </div>
            </div>
            <button className="cart-checkout">CHECKOUT</button>
        </div>
    )
}

export default Cart;