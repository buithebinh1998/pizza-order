import React, {useContext, useEffect} from 'react'
import './CartPayment.css'
import {Context} from '../../context/Context/Context'

const CartPayment = () => {
    const {cart, removeFromCart, setNewTotalPrice} = useContext(Context);
    let totalPrice = 0;
    
    const loadCart = cart.map((item, index) => {
        const showPrice = item.price*1000*item.quantity;
        const showPriceString = new Intl.NumberFormat('de-DE').format(showPrice); 
        totalPrice+=showPrice;
        setNewTotalPrice(totalPrice);
        
        return(
            <div className="cart-info" key={index}>
                <div className="cart-info-name">{item.name}</div>
                <div className="cart-info-price-wrapper">
                    
                    <div className="cart-info-quantity">x{item.quantity}</div>
                    
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
            
        </div>
    )
}

export default CartPayment;