import React from 'react'
import Payment from '../../components/Payment/Payment'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import background from '../../assets/img/bg.png'
const PaymentPage = () => {
    return(
        <div style={{backgroundImage:`url(${background})`}}>
            <Header/>
            <div id="spacer"></div>
            <Payment/>
            <Footer/>
        </div>
    )
}

export default PaymentPage