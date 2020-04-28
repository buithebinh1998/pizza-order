import React, {useContext, useEffect} from 'react'
import './BigCart.css'
import {Context} from '../../context/Context/Context'
const BigCart = () => {
    const {cart, increaseQuantity, removeFromCart, decreaseQuantity, setNewTotalPrice} = useContext(Context);
    let totalPrice = 0;

    const loadCart = cart.map((item, index) => {
        const showPrice = item.price*item.quantity;
        const showPriceString = new Intl.NumberFormat('de-DE').format(showPrice); 
        totalPrice+=showPrice;
        setNewTotalPrice(totalPrice);
        return(
            <div className="bigcart-info" key={index}>
                <div className="bigcart-info-name">{item.name}</div>
                <div className="bigcart-info-price-wrapper">
                    <button className="bigcart-quantity-button" onClick={() => decreaseQuantity(item)}>-</button>
                    <div className="bigcart-info-quantity">{item.quantity}</div>
                    <button className="bigcart-quantity-button" onClick={() => increaseQuantity(item)}>+</button>
                    <div className="bigcart-info-price">{showPriceString+"Đ"}</div>
                </div>
                <button className="bigcart-remove-button" onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        )
    });

    useEffect( () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return(
        <div className="bigcart">
            <div>
                <div className="bigcart-title">REVIEW CART</div>
                <div className="bigcart-load">
                    {loadCart}
                </div>
                <div className="bigtotal-wrap">
                    <div className="bigcart-total">Total:</div>
                    <div className="bigcart-price">{Intl.NumberFormat('de-DE').format(totalPrice)+"Đ"}</div>
                </div>
            </div>
            <button className="bigcart-checkout">CHECKOUT</button>
        </div>
    )
}

export default BigCart;