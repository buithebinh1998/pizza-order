import React, {useContext, useEffect} from 'react'
import './BigCart.css'
import {Context} from '../../context/Context/Context'
import {NavLink} from 'react-router-dom'
const BigCart = () => {
    const {cart, user, isAuthenticated, increaseQuantity, removeFromCart, decreaseQuantity, setNewTotalPrice} = useContext(Context);
    let totalPrice = 0;
    console.log(user);
    console.log(isAuthenticated);
    const loadCart = cart.map((item, index) => {
        const showPrice = item.price*item.quantity;
        const showPriceString = new Intl.NumberFormat('de-DE').format(showPrice); 
        totalPrice+=showPrice;
        setNewTotalPrice(totalPrice);
        return(
            <div className="bigcart-info" key={index}>
                <div className="bigcart-info-name">{item.name}</div>
                <div className="bigcart-quantity">
                    <button className="bigcart-quantity-button" onClick={() => decreaseQuantity(item)}>-</button>
                    <div className="bigcart-info-quantity">{item.quantity}</div>
                    <button className="bigcart-quantity-button" onClick={() => increaseQuantity(item)}>+</button>
                </div>
                <div>
                    <button className="bigcart-remove-button" onClick={() => removeFromCart(item)}>Remove</button>
                </div>
                <div className="bigcart-info-price">{showPriceString+"Đ"}</div>
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
                <hr/>
                <div className="bigcart-load">
                    {loadCart}
                </div>
                <div className="bigcart-total-wrap">
                    <div className="bigcart-total">Total:</div>
                    <div className="bigcart-price">{Intl.NumberFormat('de-DE').format(totalPrice)+"Đ"}</div>
                </div>
            </div>
            <div className="bigcart-button-wrapper">
                <div>
                    <NavLink to='/pizza'><button className="bigcart-button" style={{background:'linear-gradient(to right, #04354c,#0078ae)'}}>BACK</button></NavLink>
                </div>
                <button className="bigcart-button">CHECKOUT</button>
            </div>
        </div>
    )
}

export default BigCart;