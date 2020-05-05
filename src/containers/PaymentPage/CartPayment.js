import React, {useContext, useEffect} from 'react'
import './CartPayment.css'
import {Context} from '../../context/Context/Context'
import {withRouter} from 'react-router-dom'
import swal from 'sweetalert'
const CartPayment = (props) => {
    const {cart, setNewTotalPrice, removeFromCart} = useContext(Context);
    let totalPrice = 0;
    let history = props.history;
    const checkCartPayment = () => {
        if(cart.length===1) {
            swal({
                title: "Your cart is empty!",
                text: 'Redirecting to Category page!',
                icon: 'warning',
                timer: 3000
            })
            const newCart = []; 
            localStorage.setItem("cart", JSON.stringify(newCart));
            setTimeout(() => {history.push('/category')}, 3000);
        }
    }
    
    const loadCart = cart.map((item, index) => {
        const showPrice = item.price*1000*item.quantity;
        const showPriceString = new Intl.NumberFormat('de-DE').format(showPrice); 
        totalPrice+=showPrice;
        setNewTotalPrice(totalPrice);
        
        return(
            <div className="paycart-info" key={index}>
                <div className="paycart-info-name">{item.name}</div>
                <div className="paycart-info-price-wrapper">
                    
                    <div className="paycart-info-quantity">x{item.quantity}</div>
                    
                    <div className="paycart-info-price">{showPriceString+"Đ"}</div>
                </div>
                <button className="paycart-remove-button" onClick={() => {removeFromCart(item); checkCartPayment();}}>Remove</button>
            </div>
        )
    });

    useEffect( () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return(
        <div className="paycart">
            <div>
                <div className="paycart-title">ORDER INFORMATION</div>
                <div className="paycart-load">
                    {loadCart}
                </div>
                <div className="pay-total-wrap">
                    <div className="paycart-total">Total:</div>
                    <div className="paycart-price">{Intl.NumberFormat('de-DE').format(totalPrice)+"Đ"}</div>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(CartPayment);