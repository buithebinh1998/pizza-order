import React from 'react'
import Payment from '../../components/Payment/Payment'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import background from '../../assets/img/bg.png'
import './PaymentPage.css'
import CartPayment from './CartPayment'
const PaymentPage = () => {
    return(
        <div style={{backgroundImage:`url(${background})`}}>
            <Header/>
            <div id="spacer"></div>
            <h1 className="payment-title">DELIVERY INFORMATION</h1>
            <div className="payment-page">
                <div className="payment-container">
                    <Payment/>
                </div>
                <div className="cart-container">
                    <CartPayment/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PaymentPage