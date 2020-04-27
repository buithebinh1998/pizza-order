import React, {useContext} from 'react'
import './Cart.css'
import {Context} from '../../context/Context/Context'
import swal from 'sweetalert'

const Cart = (props) => {
    const [context, setContext] = useContext(Context);
    let totalPrice = 0;
    let totalString = new Intl.NumberFormat('de-DE').format(totalPrice);;
    const findItemInCart = (cart, item) => { 
        let index = -1;
        if(cart.length>0){
            for(let i=0; i<cart.length; i++){
                if(cart[i].name === item.name) index=i;
            }
        }
        return index;
    }

    const increaseQuantity = (cart, item) => {
        const newCart = [...context.cart];
        const index = findItemInCart(cart, item);
        newCart[index].quantity = newCart[index].quantity+1;
        setContext({cart:newCart});
        console.log(context.total);
    }

    const decreaseQuantity = (cart, item) => {
        const newCart = [...context.cart];
        const index = findItemInCart(cart, item);
        if(newCart[index].quantity>1) {
            newCart[index].quantity = newCart[index].quantity-1;
            setContext({cart:newCart});
        }
    }
    
    const removeFromCart = (cart, removeItem) => {
        const newCart = [...context.cart];
        const index = findItemInCart(cart, removeItem);
        newCart.splice(index, 1);
        setContext({cart:newCart});
        swal({
            title: "Remove from cart successfully!",
            icon: "success",
            button: "OK!"
        });
    }

    const loadCart = context.cart.map((item, index) => {
        const showPrice = item.price*item.quantity;
        const showPriceString = new Intl.NumberFormat('de-DE').format(showPrice);
        totalPrice+=item.price*item.quantity;
        totalString = new Intl.NumberFormat('de-DE').format(totalPrice);
        return(
            <div className="cart-info" key={index}>
                <div className="cart-info-name">{item.name}</div>
                <div className="cart-info-price-wrapper">
                    <button className="cart-quantity-button" onClick={() => decreaseQuantity(context.cart, item)}>-</button>
                    <div className="cart-info-quantity">{item.quantity}</div>
                    <button className="cart-quantity-button" onClick={() => increaseQuantity(context.cart, item)}>+</button>
                    <div className="cart-info-price">{showPriceString+"Đ"}</div>
                </div>
                <button className="cart-remove-button" onClick={() => removeFromCart(context.cart, item)}>Remove</button>
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
                    <div className="cart-price">{totalString+"Đ"}</div>
                </div>
            </div>
            <button className="cart-checkout">CHECKOUT</button>
        </div>
    )
}

export default Cart;