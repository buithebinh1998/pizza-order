import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BigCart from '../../components/Cart/BigCart'
import './CartPage.css'
import background from '../../assets/img/bg.png'
const CartPage = () => {
    return(
        <div className="cart-page" style={{backgroundImage:`url(${background})`}}>
            <Header/>
            <div id="spacer"></div>
            <BigCart/>
            <Footer/>
        </div>
    )
}

export default CartPage;