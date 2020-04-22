import React from 'react'
import './Cart.css'

const Cart = (props) => {
    return(
        <div className="cart">
            <div>
                <div className="cart-title">ORDER INFORMATION</div>
                <div className="total-wrap">
                    <div className="cart-total">Total:</div>
                    <div className="cart-price">0Đ</div>
                </div>
            </div>
            <button>CHECKOUT</button>
        </div>
    )
}

export default Cart;