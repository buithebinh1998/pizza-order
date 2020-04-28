import React, {useContext, useEffect} from 'react'
import './Cart.css'
import {Context} from '../../context/Context/Context'
const Cart = () => {
    const {cart, saveCartToLocalStorage, increaseQuantity, removeFromCart, decreaseQuantity, setNewTotalPrice} = useContext(Context);
    let totalPrice = 0;

    const loadCart = cart.map((item, index) => {
        const showPrice = item.price*item.quantity;
        const showPriceString = new Intl.NumberFormat('de-DE').format(showPrice); 
        totalPrice+=item.price*item.quantity;
        setNewTotalPrice(totalPrice);
        saveCartToLocalStorage(cart);
        return(
            <div className="cart-info" key={index}>
                <div className="cart-info-name">{item.name}</div>
                <div className="cart-info-price-wrapper">
                    <button className="cart-quantity-button" onClick={() => decreaseQuantity(item)}>-</button>
                    <div className="cart-info-quantity">{item.quantity}</div>
                    <button className="cart-quantity-button" onClick={() => increaseQuantity(item)}>+</button>
                    <div className="cart-info-price">{showPriceString+"Đ"}</div>
                </div>
                <button className="cart-remove-button" onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        )
    });

    useEffect( () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return(
        <div className="cart">
            <div>
                <div className="cart-title">ORDER INFORMATION</div>
                <div className="cart-load">
                    {loadCart}
                </div>
                <div className="total-wrap">
                    <div className="cart-total">Total:</div>
                    <div className="cart-price">{Intl.NumberFormat('de-DE').format(totalPrice)+"Đ"}</div>
                </div>
            </div>
            <button className="cart-checkout">CHECKOUT</button>
        </div>
    )
}

export default Cart;