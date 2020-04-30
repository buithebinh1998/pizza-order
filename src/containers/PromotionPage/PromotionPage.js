import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Promotion from '../../components/Promotion/Promotion'
import backgroundPromotion from '../../assets/img/bg.png'
import './PromotionPage.css'
const PromotionPage = () => {
    return(
        <div className="PromotionPage" style={{backgroundImage:`url(${backgroundPromotion})`}}>
            <Header/>
            <div id="spacer"></div>
            <Promotion/>
            <Footer/>
        </div>
    )
}

export default PromotionPage;